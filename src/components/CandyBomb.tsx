import {
	Checkbox,
	Input,
	Listbox,
	ListboxItem,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
	Tooltip,
} from "@nextui-org/react";
import dayjs from "dayjs";
import { useState } from "react";
import { FaCircleExclamation, FaCircleInfo } from "react-icons/fa6";
import { ProcessingActivities, Reward } from "../types";

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

	return [
		<TableCell key={`${reward?.targetType}-1`} style={{ borderLeft: "1px solid black" }} className={globalClassName}>
			<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
				<Tooltip content={spotBoard}>
					<span>
						<FaCircleInfo />
					</span>
				</Tooltip>

				{reward?.coinNameList.length ? reward?.coinNameList : "All"}
			</div>
		</TableCell>,
		<TableCell key={`${reward?.targetType}-2`} className={globalClassName}>
			<div style={{ display: "flex", justifyContent: "center" }}>{maxProfitTicket?.point}</div>
		</TableCell>,
		<TableCell key={`${reward?.targetType}-3`} className={globalClassName}>
			{maxProfitTicket?.commission}$
		</TableCell>,
		<TableCell key={`${reward?.targetType}-4`} className={globalClassName}>
			{maxProfitTicket?.profit?.toFixed(2)}$
		</TableCell>,
		<TableCell key={`${reward?.targetType}-5`} className={globalClassName}>
			<Input
				size="sm"
				type="number"
				placeholder={String(totalTickets)}
				value={String(usersValue || "")}
				onValueChange={(value) => setUsersValue(Number(value))}
			/>
		</TableCell>,
	];
};

const BombTableRow = ({ activity, predictUsers }: { activity: ProcessingActivities; predictUsers?: boolean }) => {
	const tokenPrice = activity.ieoTotalUsdt / activity.ieoTotal;
	const spotReward = activity.reward.find(({ targetType }) => targetType === 4);
	const futuresReward = activity.reward.find(({ targetType }) => targetType === 39);

	const volumeOndTime = dayjs(Number(activity.endTime));

	const hoursToEnd = volumeOndTime.diff(dayjs(), "hour");

	return [
		<TableRow key={activity?.id}>
			<TableCell>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<Checkbox isSelected={activity?.newUserSignUp} />
				</div>
			</TableCell>

			<TableCell style={{ display: "flex", gap: "8px" }}>
				<img src={activity?.coinIcon} width={24} height={24} style={{ borderRadius: 100 }} /> {activity?.name}
			</TableCell>

			{RenderInfoColumns({ tokenPrice, activity, reward: spotReward, predictUsers }).flatMap((er) => er) as any}

			{RenderInfoColumns({ tokenPrice, activity, reward: futuresReward, predictUsers }).flatMap((er) => er) as any}

			<TableCell>
				<div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
					{volumeOndTime.format("DD.MM HH:mm")} {hoursToEnd}h {hoursToEnd <= 2 && <FaCircleExclamation className="text-red-700" />}
				</div>
			</TableCell>
		</TableRow>,
	];
};

type HomeProps = {
	processingActivities: ProcessingActivities[];
};

const formatComma = (number: number | string) => String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const CandyBomb = (props: HomeProps) => {
	const [predictUsers, setPredictUsers] = useState(false);

	const tableTopContent = (
		<div style={{ display: "flex", gap: "12px" }}>
			<Checkbox isSelected={predictUsers} onValueChange={setPredictUsers}>
				Predict user count
			</Checkbox>
		</div>
	);

	return (
		<Table layout="fixed" topContent={tableTopContent}>
			<TableHeader>
				<TableColumn style={{ width: "50px" }}>New U</TableColumn>
				<TableColumn style={{ width: "100px" }}>Code</TableColumn>
				<TableColumn style={{ width: "75px" }}>Spot</TableColumn>
				<TableColumn style={{ width: "60px" }}>Tickets</TableColumn>
				<TableColumn style={{ width: "75px" }}>Comm</TableColumn>
				<TableColumn style={{ width: "75px" }}>Profit</TableColumn>
				<TableColumn style={{ width: "100px" }}>Est Users</TableColumn>
				<TableColumn style={{ width: "75px" }}>Futures</TableColumn>
				<TableColumn style={{ width: "60px" }}>Tickets</TableColumn>
				<TableColumn style={{ width: "75px" }}>Comm</TableColumn>
				<TableColumn style={{ width: "75px" }}>Profit</TableColumn>
				<TableColumn style={{ width: "100px" }}>Est Users</TableColumn>
				<TableColumn>Finish date</TableColumn>
				{/* style={{ width: "150px" }} */}
			</TableHeader>
			<TableBody>
				{props.processingActivities?.sort((a,b) => Number(a.endTime) - Number(b.endTime)).map((activity) => BombTableRow({ activity, predictUsers })).flatMap((er) => er)}
			</TableBody>
		</Table>
	);
};
