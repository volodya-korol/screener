import { cacheData, checkCacheData, getCacheData } from "@/untils";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

const CACHE_FILE = path.resolve("./splash.json");

export const config = {
	maxDuration: 50000000,
  };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (checkCacheData(CACHE_FILE)) return res.status(200).json(JSON.parse(getCacheData(CACHE_FILE)));

	const { data } = await axios.get("https://api2.bybit.com/spot/api/deposit-activity/v2/project/ongoing/projectList");

	async function processArrayAsync() {
		const results: any[] = [];

		if (!data?.result) return results;

		for (const item of data?.result) {
			await new Promise((resolve) => setTimeout(resolve, 100));

			const { data } = await axios.get(
				`https://api2.bybit.com/spot/api/deposit-activity/v2/project/detail?projectCode=${item?.code}`
			);

			results.push({ ...item, ...data?.result });
		}

		return results;
	}

	const processingActivities = await processArrayAsync();

	const withData = processingActivities?.every((df) => !!df?.code) && !!processingActivities.length;

	if (withData) cacheData(CACHE_FILE, processingActivities);

	res.status(200).json(processingActivities);
}
