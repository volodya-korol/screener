import axios from "axios";

export default function Home() {
	return <div className="p-4">{/* <CandyBomb /> */}</div>;
}

export const getServerSideProps = async () => {
	try {
		const { data } = await axios({
			method: "GET",
			url: "https://screener-backend-production-b1eb.up.railway.app/",
			// data: '{"airDropType":0}',
			adapter: "fetch",
			headers: {
				host: "screener-backend-production-b1eb.up.railway.app",
				connection: "keep-alive",
				accept: "application/json, text/plain, */*",
				"content-type": "application/json;charset=UTF-8",
				"accept-language": "*",
				"sec-fetch-mode": "cors",
				// "user-agent": "undici",
				"accept-encoding": "gzip, deflate",
				// "content-length": "17",
			},
		});

		console.log("==================================== OK");
		// console.log(data);
		// console.log("====================================");
	} catch (error) {
		// @ts-ignore
		console.log("====================================", error?.response?.status);
		// @ts-ignore
		console.log(error);
		console.log("================erre====================");
	}

	return { props: {} };
};

// localy
// 'x-forwarded-for': '46.149.184.41',
// 'x-forwarded-host': 'screener-backend-production-b1eb.up.railway.app',
// 'x-forwarded-proto': 'https',
// 'x-real-ip': '46.149.184.41',
// 'x-request-id': '4EYr5GxKSVy47wgJ-E5ATQ_499424464'
