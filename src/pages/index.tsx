import { ProcessingActivities } from "../types";

type HomeProps = {
	processingActivities: ProcessingActivities[];
};

export default function Home(props: HomeProps) {
	console.log(props);

	return <div className="p-4">{/* <CandyBomb {...props} /> */}</div>;
}

export const getServerSideProps = async () => {
	const resRes = await fetch("https://www.bitget.com/v1/act/candyBombNew/current/list/", {
		headers: {
			accept: "application/json, text/plain, */*",
			"accept-language": "uk,en;q=0.9,en-US;q=0.8,uk-UA;q=0.7,pl;q=0.6",
			baggage:
				"sentry-environment=online,sentry-release=e7560196c3e8be74569ce68ff67c8f7c43a36e7f,sentry-public_key=025530a665684b8e9477023795a9280b,sentry-trace_id=a368c02f39634debb2a1375d22a91a5d,sentry-sample_rate=0.05,sentry-transaction=%2F%5Blocale%5D%2Fevents%2Fcandy-bomb,sentry-sampled=false",
			"content-type": "application/json;charset=UTF-8",
			deviceid: "e4af26b39f2f8ff040816f5b31744913",
			language: "uk_UA",
			locale: "uk_UA",
			priority: "u=1, i",
			"sec-ch-ua": '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
			"sec-ch-ua-mobile": "?0",
			"sec-ch-ua-platform": '"Windows"',
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "no-cors",
			"sec-fetch-site": "same-origin",
			"sentry-trace": "a368c02f39634debb2a1375d22a91a5d-92fbae13798cfdf2-0",
			terminalcode: "312fb273ec84c49976a35981fc49d029",
			terminaltype: "1",
		},
		referrer: "https://www.bitget.com/uk/events/candy-bomb",
		referrerPolicy: "unsafe-url",
		body: '{"airDropType":0}',
		method: "POST",
		mode: "no-cors", // додаєте цей параметр
		credentials: "omit", // додаєте цей параметр
	});
	console.log(await resRes.text());
	console.log(resRes.headers);
	console.log(resRes.status);
	console.log(resRes.statusText);

	// const res = await resRes.json();

	// async function processArrayAsync() {
	// 	const results = [];

	// 	for (const item of res.data.processingActivities) {
	// 		try {
	// 			const reward = await fetch("https://www.bitget.com/v1/act/candyBombNew/myReward", {
	// 				headers: {
	// 					accept: "application/json, text/plain, */*",
	// 					"content-type": "application/json;charset=UTF-8",
	// 				},
	// 				body: `{"activityId":${item.id}}`,
	// 				method: "POST",
	// 			}).then((res) => res?.text());

	// 			console.log(reward);

	// 			let rewData = undefined

	// 			try {
	// 				rewData = JSON.parse(reward)
	// 			} catch (error) {
	// 				rewData = undefined
	// 			}

	// 			results.push({ ...item, reward: rewData && rewData?.data });
	// 		} catch (error) {
	// 			console.error("Error:", error);
	// 		}

	// 		await new Promise((resolve) => setTimeout(resolve, 800));
	// 	}

	// 	return results;
	// }

	// const processingActivities = await processArrayAsync();

	return { props: { processingActivities: [] } };
};
