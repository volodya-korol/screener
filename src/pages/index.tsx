import { CandyBomb } from "@/components/CandyBomb";
import { TokenSplash } from "@/components/TokenSplash";

export default function Home(props: any) {

	return (
		<div className="p-4" style={{display: 'flex', flexDirection: 'column', gap: 48}}>
			<CandyBomb />
			<TokenSplash />
		</div>
	);
}

// export const getServerSideProps = async () => {
// 	// const { data } = await axios.post(
// 	// 	"https://www.bitget.com/v1/act/candyBombNew/current/list/",
// 	// 	{ airDropType: 0 },
// 	// 	{
// 	// 		adapter: ["fetch"],
// 	// 		headers: {
// 	// 			host: "www.bitget.com",
// 	// 			connection: "keep-alive",
// 	// 			accept: "application/json, text/plain, */*",
// 	// 			"content-type": "application/json;charset=UTF-8",
// 	// 			"accept-language": "*",
// 	// 			"sec-fetch-mode": "cors",
// 	// 			"accept-encoding": "gzip, deflate",
// 	// 		},
// 	// 	}
// 	// );

// 	const res = await fetch("https://api2.bybit.com/spot/api/deposit-activity/v2/project/ongoing/projectList");
// 	// const a2 = await axios.get("https://api2.bybit.com/spot/api/deposit-activity/v2/project/ongoing/projectList", {
// 	// 	adapter: ["fetch"],
// 	// });
// 	// // const a3 = await axios.get("https://api2.bybit.com/spot/api/deposit-activity/v2/project/ongoing/projectList", {
// 	// // 	adapter: ["xhr"],
// 	// // });
// 	// const a4 = await axios.get("https://api2.bybit.com/spot/api/deposit-activity/v2/project/ongoing/projectList", {
// 	// 	adapter: ["http"],
// 	// });

// 	// 	console.log("==================================== OK");
// 	// 	// console.log(data);
// 	// 	// console.log("====================================");
// 	// } catch (error) {
// 	// 	// @ts-ignore
// 	// 	console.log("====================================", error?.response?.status);
// 	// 	// @ts-ignore
// 	// 	console.log(error);
// 	// 	console.log("================erre====================");
// 	// }

// 	// try {
// 	// 	const { data } = await axios({
// 	// 		method: "GET",
// 	// 		url: "https://screener-backend-production-b1eb.up.railway.app/",
// 	// 		// url: "https://www.bitget.com/v1/act/candyBombNew/current/list",
// 	// 		// data: '{"airDropType":0}',
// 	// 		adapter: "fetch",
// 	// 		headers: {
// 	// 			// host: "www.bitget.com",
// 	// 			host: "screener-backend-production-b1eb.up.railway.app",
// 	// 			connection: "keep-alive",
// 	// 			accept: "application/json, text/plain, */*",
// 	// 			"content-type": "application/json;charset=UTF-8",
// 	// 			"accept-language": "*",
// 	// 			"sec-fetch-mode": "cors",
// 	// 			"user-agent": "",
// 	// 			hello: "hi",
// 	// 			"accept-encoding": "gzip, deflate",
// 	// 			// "content-length": "17"
// 	// 		},
// 	// 	});

// 	// 	console.log("=================================screener=== OK");
// 	// 	// console.log(data);
// 	// 	// console.log("====================================");
// 	// } catch (error) {
// 	// 	// @ts-ignore
// 	// 	console.log("==============================screener======", error?.response?.status);
// 	// 	// @ts-ignore
// 	// 	// console.log(error);
// 	// 	console.log("================erre===========screener=========");
// 	// }

// 	// console.log("====================================");
// 	// console.log({ a1: a1.data });
// 	// console.log("====================================");

// 	return { props: { data: await res.text() } };
// };

// localy
// 'x-forwarded-for': '46.149.184.41',
// 'x-forwarded-host': 'screener-backend-production-b1eb.up.railway.app',
// 'x-forwarded-proto': 'https',
// 'x-real-ip': '46.149.184.41',
// 'x-request-id': '4EYr5GxKSVy47wgJ-E5ATQ_499424464'

//! vercel
// 'user-agent': 'node',

// host: 'screener-backend-production-b1eb.up.railway.app',
// accept: 'application/json, text/plain, */*',
// 'accept-encoding': 'gzip, deflate',
// 'accept-language': '*',
// 'content-type': 'application/json;charset=UTF-8',
// 'sec-fetch-mode': 'cors',
// 'x-forwarded-for': '18.185.144.3',
// 'x-forwarded-host': 'screener-backend-production-b1eb.up.railway.app',
// 'x-forwarded-proto': 'https',
// 'x-real-ip': '18.185.144.3',
// 'x-request-id': '4sWmxzJkTcSql_CyD7rreg_499424464',
// 'x-vercel-id': 'sfo1::pjmmr-1719473513898-2e746bda591f'

// host: 'screener-backend-production-b1eb.up.railway.app',
// accept: 'application/json, text/plain, */*',
// 'accept-encoding': 'gzip, deflate',
// 'accept-language': '*',
// 'content-type': 'application/json;charset=UTF-8',
// hello: 'hi',
// 'sec-fetch-mode': 'cors',
// 'x-forwarded-for': '2.57.207.254',
// 'x-forwarded-host': 'screener-backend-production-b1eb.up.railway.app',
// 'x-forwarded-proto': 'https',
// 'x-real-ip': '2.57.207.254',
// 'x-request-id': 'me_iFXoITIiIzUdiXwXFOQ_2823689937'
