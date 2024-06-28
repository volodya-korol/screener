import axios from "axios";
import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

const CACHE_FILE = path.resolve("./cache.json");
const CACHE_TTL = 60 * 60 * 1000;
let cache_exist = false;

function readCache() {
	return;
}

function writeCache(data: any) {
	fs.writeFileSync(CACHE_FILE, JSON.stringify(data, null, 2));
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	console.log("rest", fs.existsSync(CACHE_FILE));

	if (fs.existsSync(CACHE_FILE)) {
		const cache = fs.readFileSync(CACHE_FILE).toString();
		console.log("===============cache=====================");
		console.log(cache);
		console.log("====================================");
		return res.status(200).json(JSON.parse(cache));
	}

	const data1 = await fetch("https://www.bitget.com/v1/act/candyBombNew/current/list/", {
		headers: {
			host: "www.bitget.com",
			connection: "keep-alive",
			accept: "application/json, text/plain, */*",
			"content-type": "application/json;charset=UTF-8",
			"accept-language": "*",
			"sec-fetch-mode": "cors",
			"accept-encoding": "gzip, deflate",
			"content-length": "17",
		},
		body: '{"airDropType":0}',
		method: "POST",
	});

	let data: any = undefined;

	try {
		data = await data1?.json();
	} catch (error) {
		console.log("===================data json error=================");
	}

	async function processArrayAsync() {
		const results: any[] = [];

		if (!data) return results;

		for (const item of data?.data?.processingActivities) {
			await new Promise((resolve) => setTimeout(resolve, 2000));

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

	console.log("======================processingActivities==============");
	console.log(processingActivities);
	console.log("====================================");

	const withData = processingActivities?.every((df) => !!df?.reward) && !!processingActivities.length;

	console.log(withData);

	const respon = { processingActivities, time: new Date().toISOString() };

	if (withData) writeCache(respon);

	res.status(200).json(respon);
}
