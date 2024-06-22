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
			"sec-fetch-site": "unsafe-none",
			"sentry-trace": "a368c02f39634debb2a1375d22a91a5d-92fbae13798cfdf2-0",
			terminalcode: "312fb273ec84c49976a35981fc49d029",
			terminaltype: "1",

			connection: "close",
			"accept-ch":
				"Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA",
			"critical-ch":
				"Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA",
			"cross-origin-embedder-policy": "require-corp",
			"cross-origin-opener-policy": "unsafe-none",
			"cross-origin-resource-policy": "unsafe-none",
			"origin-agent-cluster": "?1",
			"permissions-policy":
				"accelerometer=(),autoplay=(),browsing-topics=(),camera=(),clipboard-read=(),clipboard-write=(),geolocation=(),gyroscope=(),hid=(),interest-cohort=(),magnetometer=(),microphone=(),payment=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),sync-xhr=(),usb=()",
			"referrer-policy": "unsafe-none",
			"x-content-options": "nosniff",
			"cf-mitigated": "challenge",
			"cf-chl-out":
				"0PFxk9SH/CAryS3SaMqDPqAuYOCxwPcT2GntSlhWecj6zUgbW2NfiwhY4W9khN3MlMVZPZxLdexmPwDWPDbY8727li3zis5rZX3w9M0f/CQSR8a6Sh+Q16B9zJzjaRn6eT3YrGVyqvEo4pCRNKtAbA==$w2GCE6BS9DiTBFqYy8HivQ==",
			"cache-control": "private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0",
			expires: "Thu, 01 Jan 1970 00:00:01 GMT",
			"set-cookie":
				"__cf_bm=HWPOc54Ll78tmg3rtaaOZcjuBqIUU7IJ1LvC1fNK7Qs-1719069814-1.0.1.1-h9YguP7szmZp0efNNxujXrkXInh9Hb.MKsGlhsQd_z5mLGEk8asP_RW3LWfGkDhUgulZ4vP8HX.GGKlyXqJ9HQ; path=/; expires=Sat, 22-Jun-24 15:53:34 GMT; domain=.bitget.com; HttpOnly; Secure; SameSite=None",
			vary: "Accept-Encoding",
			"x-frame-options": "DENY",
			server: "cloudflare",
			"cf-ray": "897d3d822f1a3818-IAD",
			"content-encoding": "br",
			"alt-svc": 'h3=":443"; ma=86400',
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
