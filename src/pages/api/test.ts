import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	console.log("rest");

	const data = await fetch("https://www.bitget.com/v1/act/candyBombNew/current/list", {
		headers: {
			accept: "application/json, text/plain, */*",
			"content-type": "application/json;charset=UTF-8",
		},
		body: '{"airDropType":0}',
		method: "POST",
	}).then(async (res) => {
		const test = await res.text();

		console.log(test);
		console.log(await res.status);
		console.log(await res.statusText);

		// if (test.startsWith("{")) return res?.json();

		return { nodats: true };
	});

    console.log({data});


	res.status(200).json({ message: data });
}
