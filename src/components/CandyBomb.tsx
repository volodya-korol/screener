import { Box, styled } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import MuiTableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Card, CardBody, Checkbox, Input, Listbox, ListboxItem, Spinner, Tooltip } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useState } from "react";
import { FaCircleExclamation, FaCircleInfo } from "react-icons/fa6";
import { ProcessingActivities, Reward } from "../types";

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
		const commission = rel?.volume / 1000;
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

export const CandyBomb = () => {
	const [predictUsers, setPredictUsers] = useState(false);

	const { data, isPending } = useQuery<{ time: string; processingActivities: ProcessingActivities[] }>({
		queryKey: ["candybomb"],
		queryFn: (): Promise<{ time: string; processingActivities: ProcessingActivities[] }> =>
			fetch("/api/candybomb").then((res) => res.json()),
	});

	console.log("====================================");
	console.log(data);
	console.log("====================================");

	if (isPending) return <Spinner label="Loading..." />;

	return (
		<Card>
			<CardBody>
				<div style={{ display: "flex", gap: "12px" }}>
					<Checkbox isSelected={predictUsers} onValueChange={setPredictUsers}>
						Predict user count
					</Checkbox>
				</div>
				<Table sx={{ tableLayout: "fixed" }}>
					<TableHead>
						<TableRow>
							<TableCell style={{ width: "70px", whiteSpace: "nowrap" }}>New_U</TableCell>
							<TableCell style={{ width: "100px" }}>Code</TableCell>
							<TableCell style={{ width: "75px" }}>Spot</TableCell>
							<TableCell style={{ width: "60px" }}>Tickets</TableCell>
							<TableCell style={{ width: "75px" }}>Comm</TableCell>
							<TableCell style={{ width: "75px" }}>Profit</TableCell>
							<TableCell style={{ width: "100px" }}>Est Users</TableCell>
							<TableCell style={{ width: "75px" }}>Futures</TableCell>
							<TableCell style={{ width: "60px" }}>Tickets</TableCell>
							<TableCell style={{ width: "75px" }}>Comm</TableCell>
							<TableCell style={{ width: "75px" }}>Profit</TableCell>
							<TableCell style={{ width: "100px" }}>Est Users</TableCell>
							<TableCell>Finish date</TableCell>
							{/* style={{ width: "150px" }} */}
						</TableRow>
					</TableHead>
					<TableBody>
						{/* @ts-ignore */}
						{data?.processingActivities
							?.sort((a, b) => Number(a.endTime) - Number(b.endTime))
							.map((activity) => {
								const tokenPrice = activity.ieoTotalUsdt / activity.ieoTotal;
								const spotReward = activity.reward?.find(({ targetType }) => targetType === 4);
								const futuresReward = activity.reward?.find(({ targetType }) => targetType === 39);

								const volumeOndTime = dayjs(Number(activity.endTime));

								const hoursToEnd = volumeOndTime.diff(dayjs(), "hour");

								return (
									<TableRow key={activity?.id}>
										<TableCell align="center">
											<Checkbox style={{ padding: 0, width: "20px" }} isSelected={activity?.newUserSignUp} />
										</TableCell>

										<TableCell>
											<Box display="flex" gap="8px">
												<img src={activity?.coinIcon} width={24} height={24} style={{ borderRadius: 100 }} />{" "}
												{activity?.name}
											</Box>
										</TableCell>

										<RenderInfoColumns
											activity={activity}
											tokenPrice={tokenPrice}
											predictUsers={predictUsers}
											reward={spotReward}
										/>
										<RenderInfoColumns
											activity={activity}
											tokenPrice={tokenPrice}
											predictUsers={predictUsers}
											reward={futuresReward}
										/>

										<TableCell>
											<div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
												{volumeOndTime.format("DD.MM HH:mm")} {hoursToEnd}h{" "}
												{hoursToEnd <= 2 && <FaCircleExclamation className="text-red-700" />}
											</div>
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
