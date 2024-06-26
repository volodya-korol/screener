import axios from "axios";

export default function Home() {
	return <div className="p-4">{/* <CandyBomb /> */}</div>;
}

export const getServerSideProps = async () => {
	try {
		const { data } = await axios({
			method: "POST",
			url: "https://www.bitget.com/v1/act/candyBombNew/current/list",
			data: '{"airDropType":0}',
			adapter: "fetch",
			headers: {
				host: "www.bitget.com",
				connection: "keep-alive",
				accept: "application/json, text/plain, */*",
				"content-type": "application/json;charset=UTF-8",
				"accept-language": "*",
				"sec-fetch-mode": "cors",
				"user-agent": "undici",
				"accept-encoding": "gzip, deflate",
				"content-length": "17",
			},
		});

		console.log("==================================== OK");
		// console.log(data);
		// console.log("====================================");
	} catch (error) {
		// @ts-ignore
		console.log("====================================", error?.response?.status);
		// @ts-ignore
		console.log({  config: error?.config, request: error?.request });
		console.log("================erre====================");
	}

	return { props: {} };
};
