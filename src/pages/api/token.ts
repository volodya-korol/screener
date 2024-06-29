import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const res123 = await fetch("https://api2.bybit.com/spot/api/deposit-activity/v2/project/ongoing/projectList");

	res.status(200).json(await res123.json());
}
