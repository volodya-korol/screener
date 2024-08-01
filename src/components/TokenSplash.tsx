import { Box, styled } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import MuiTableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Card, CardBody, Input, Listbox, ListboxItem, Spinner, Tooltip } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useState } from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { ProcessingActivities, Reward, SplashRes } from "../types";
const TableCell = styled(MuiTableCell)`
	padding: 12px;
	white-space: nowrap;
`;

const volumeCloseOffset = 2;

const RenderInfoColumns = ({
	tokenPrice,
	reward,
	predictUsers,
	activity,
}: {
	reward?: Reward;
	tokenPrice: number;
	predictUsers?: boolean;
	activity: ProcessingActivities;
}) => {
	const [usersValue, setUsersValue] = useState(0);

	const hoursToEnd = dayjs(Number(activity.endTime)).diff(dayjs(), "hour");
	const totalTickets =
		usersValue || (predictUsers ? Number(reward?.sendSign) * (hoursToEnd / 10) : Number(reward?.sendSign));

	const poolInUsdt = Math.round((Number(reward?.amount) || 0) * tokenPrice);
	const rewardPerTicket = poolInUsdt / totalTickets;

	const spotTickets = reward?.targetRelations.map((rel) => {
		const commission = reward?.targetType === 39 ? (rel?.volume * 0.7) / 1000 : rel?.volume / 1000;
		const profit = Number((rewardPerTicket * rel?.point - commission).toFixed(2));

		return { ...rel, commission, profit };
	});

	const maxProfitTicket = spotTickets?.reduce(function (prev, current) {
		return prev && prev.profit > current.profit ? prev : current;
	});

	const spotBoard = !!spotTickets && (
		<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
			Total pool: {formatComma(poolInUsdt)}$
			<Listbox>
				{spotTickets?.map(({ commission, profit, point, volume }) => {
					return (
						<ListboxItem
							key={volume}
							isDisabled={profit < 0}
							className={maxProfitTicket?.point === point ? "bg-cyan-100" : ""}>
							{point} ({volume} ~ {commission}$) {profit}$
						</ListboxItem>
					);
				})}
			</Listbox>
		</div>
	);

	const globalClassName = reward?.newStatus ? "bg-yellow-50" : "";

	return (
		<>
			<TableCell style={{ borderLeft: "1px solid black" }} className={globalClassName}>
				<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
					<Tooltip content={spotBoard}>
						<span>
							<FaCircleInfo />
						</span>
					</Tooltip>

					{reward?.coinNameList.length ? reward?.coinNameList : "All"}
				</div>
			</TableCell>
			<TableCell className={globalClassName}>
				<div style={{ display: "flex", justifyContent: "center" }}>{maxProfitTicket?.point}</div>
			</TableCell>
			<TableCell className={globalClassName}>{maxProfitTicket?.commission}$</TableCell>
			<TableCell className={globalClassName}>{maxProfitTicket?.profit?.toFixed(2)}$</TableCell>
			<TableCell className={globalClassName}>
				<Input
					size="sm"
					type="number"
					placeholder={String(totalTickets)}
					value={String(usersValue || "")}
					onValueChange={(value) => setUsersValue(Number(value))}
				/>
			</TableCell>
		</>
	);
};

RenderInfoColumns.getCollectionNode = () => {};

const formatComma = (number: number | string) => String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const TokenSplash = () => {
	const [predictUsers, setPredictUsers] = useState(false);

	const { data, isPending } = useQuery<SplashRes>({
		queryKey: ["splash"],
		queryFn: (): Promise<SplashRes> => fetch("/api/splash").then((res) => res.json()),
	});

	if (isPending) return <Spinner label="Loading..." />;

	return (
		<Card>
			<CardBody>
				<div style={{ display: "flex", gap: "12px" }}>
					<p style={{ fontWeight: 600, fontSize: 16 }}>Token splash</p>
				</div>
				<Table sx={{ tableLayout: "fixed" }}>
					<TableHead>
						<TableRow>
							<TableCell style={{ width: "100px" }}>Token</TableCell>
							<TableCell style={{ width: "100px" }}>Participants</TableCell>
							<TableCell style={{ width: "120px" }}>Result date</TableCell>
							<TableCell style={{ width: "120px" }}>Deposit reward</TableCell>
							<TableCell style={{ width: "100px" }}>Est reward</TableCell>
							<TableCell style={{ width: "80px" }}>Max users</TableCell>
							<TableCell style={{ width: "120px" }}>Deposit start</TableCell>

							<TableCell>Trade per 1000v</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data?.map((item) => {
							const isDepositForNew = !!item.newUserPrize;

							const canEstimateReward = isDepositForNew
								? item.newUserCondition1?.[0]?.token === item.newUserPrizeToken
								: item.oldUserCondition1?.[0]?.token === item.oldUserPrizeToken;

							const userPrize = isDepositForNew ? Number(item?.newUserPrize) : Number(item?.oldUserPrize);
							const userCondition1 = isDepositForNew
								? Number(item.newUserCondition1?.[0]?.amount)
								: Number(item.oldUserCondition1?.[0]?.amount);
							const userPrizeTotal = isDepositForNew ? Number(item.newUserPrizeTotal) : Number(item.oldUserPrizeTotal);
							const estDepositReward = ((userPrize || 0) * 100) / (userCondition1 || 1);

							const tradePrizeInToken =
								(1000 / Number(item?.totalTradeValue)) * Number(item?.tradeUserPrizeTotal) || "";

							return (
								<TableRow
									key={item?.code}
									onClick={() =>
										window.open(`https://www.bybit.com/en/trade/spot/token-splash/detail?code=${item?.code}&ref=8K9R7O`)
									}>
									<TableCell>
										<Box display="flex" gap="8px" sx={{ cursor: "pointer" }}>
											<img src={item?.icon} width={24} height={24} style={{ borderRadius: 100 }} /> {item?.token}
										</Box>
									</TableCell>
									<TableCell>{item?.participants}</TableCell>
									<TableCell>
										{item?.depositEnd
											? dayjs(item?.depositEnd).add(1, "minute").add(1, "hour").format("DD.MM HH:mm")
											: null}
									</TableCell>

									<TableCell style={{ borderLeft: "1px solid black" }}>
										{isDepositForNew
											? `${item.newUserPrize || ""} ${item.newUserPrizeToken}`
											: `${item.oldUserPrize} ${item.oldUserPrizeToken}`}
									</TableCell>

									<TableCell>{canEstimateReward && `${estDepositReward.toFixed(2)} USDT`}</TableCell>

									<TableCell>{userPrizeTotal / userPrize || ""}</TableCell>
									<TableCell>{item?.depositStart ? dayjs(item?.depositStart).format("DD.MM HH:mm") : null}</TableCell>

									<TableCell style={{ borderLeft: "1px solid black" }}>
										{tradePrizeInToken && `${tradePrizeInToken.toFixed(4)} ${item?.tradePrizeToken}`}
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</CardBody>
		</Card>
	);
};
