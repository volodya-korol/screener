import { cacheData, checkCacheData, getCacheData } from "@/untils";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

const CACHE_FILE = path.resolve("./candybomb.json");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

	if (checkCacheData(CACHE_FILE)) return res.status(200).json(JSON.parse(getCacheData(CACHE_FILE)));

	const { data } = await axios.post(
		"https://www.bitget.com/v1/act/candyBombNew/current/list/",
		{ airDropType: 0 },
		{
			adapter: ["fetch"],
			headers: {
				host: "www.bitget.com",
				connection: "keep-alive",
				accept: "application/json, text/plain, */*",
				"content-type": "application/json;charset=UTF-8",
				"accept-language": "*",
				"sec-fetch-mode": "cors",
				"accept-encoding": "gzip, deflate",
			},
		}
	);

	async function processArrayAsync() {
		const results: any[] = [];

		if (!data) return results;

		for (const item of data?.data?.processingActivities) {
			await new Promise((resolve) => setTimeout(resolve, 5000));

			try {
				const rew = await axios.post(
					"https://www.bitget.com/v1/act/candyBombNew/myReward",
					{ activityId: item?.id },
					{
						adapter: ["fetch"],
						headers: {
							host: "www.bitget.com",
							connection: "keep-alive",
							accept: "application/json, text/plain, */*",
							"content-type": "application/json;charset=UTF-8",
							"accept-language": "*",
							"sec-fetch-mode": "cors",
							"accept-encoding": "gzip, deflate",
							Referer: `https://www.bitget.com/uk/events/candy-bomb/detail/${item?.id}`,
							"Referrer-Policy": "unsafe-url",
						},
					}
				);

				let rewData = undefined;

				try {
					rewData = rew.data;
				} catch (error) {
					rewData = undefined;
				}

				results.push({ ...item, reward: rewData && rewData?.data });
			} catch (error) {
				console.error("Error:", error);
			}
		}

		return results;
	}

	const processingActivities = await processArrayAsync();

	const respon = { processingActivities, time: new Date().toISOString() };
	const withData = processingActivities?.every((df) => !!df?.reward) && !!processingActivities.length;


	if (withData) cacheData(CACHE_FILE, respon);

	res.status(200).json(respon);
}
