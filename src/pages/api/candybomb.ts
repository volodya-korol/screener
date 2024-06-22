import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	console.log("rest");

	const data = await fetch("https://www.bitget.com/v1/act/candyBombNew/current/list", {
		headers: {
			accept: "application/json, text/plain, */*",
			"accept-language": "uk,en;q=0.9,en-US;q=0.8,uk-UA;q=0.7,pl;q=0.6",
			baggage:
				"sentry-environment=online,sentry-release=068a2da0b0cf49358f939ba48fefc0fee166c0d2,sentry-public_key=025530a665684b8e9477023795a9280b,sentry-trace_id=97b298f16bc34ba8bc7716eaa66f4893,sentry-sample_rate=0.05,sentry-transaction=%2F%5Blocale%5D%2Fevents%2Fcandy-bomb,sentry-sampled=false",
			"content-type": "application/json;charset=UTF-8",
			deviceid: "e4af26b39f2f8ff040816f5b31744913",
			language: "uk_UA",
			locale: "uk_UA",
			priority: "u=1, i",
			"sentry-trace": "97b298f16bc34ba8bc7716eaa66f4893-b9ba738eed7ced76-0",
			terminalcode: "312fb273ec84c49976a35981fc49d029",
			terminaltype: "1",
			cookie:
				'_ga=GA1.1.521948910.1699264709; afUserId=8408708b-af5b-4e69-8916-45ebc3615662-p; _ym_uid=169926473090529640; i18n_redirected=uk; _dx_kvani5r=f5de6fbd98f10b798158e44e8b9519342a02b763b733ce720e1ab1e9087e54fa1a943d45; captcha_v4_user=7a1073c8cdba4af5a34127cfc7a4696d; _tt_enable_cookie=1; _ttp=swiLjuEHk8ataYaAI1CW2urBZhf; _dx_uzZo5y=1706192757733Yai4FiQuFvDwF03rClIXQnvhdcM9OEfF; g_state={"i_l":0}; _ym_d=1715151874; __adroll_fpc=6da75cbe603b9547ce6ca3eda955436d-1715961654743; _ga_Z8Q93KHR0F=deleted; _ga_BW4GVE68H3=GS1.1.1717516211.9.1.1717516291.0.0.0; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%228448751175%22%2C%22first_id%22%3A%22w-042226739-1699264708272-345758804%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThiYmQ3ZTU0ZmM3YWYtMGQ2MDVjMjU1ZDMzMGYtMjYwMzEwNTEtMTMyNzEwNC0xOGJiZDdlNTRmZDEwOWEiLCIkaWRlbnRpdHlfbG9naW5faWQiOiI4NDQ4NzUxMTc1In0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%228448751175%22%7D%2C%22%24device_id%22%3A%2218bbd7e54fc7af-0d605c255d330f-26031051-1327104-18bbd7e54fd109a%22%7D; _ga_39NRXSECDR=GS1.1.1718046628.4.1.1718046647.41.0.0; OptanonAlertBoxClosed=Wed%20Jun%2012%202024%2020:30:58%20GMT+0300%20(%D0%B7%D0%B0%20%D1%81%D1%85%D1%96%D0%B4%D0%BD%D0%BE%D1%94%D0%B2%D1%80%D0%BE%D0%BF%D0%B5%D0%B9%D1%81%D1%8C%D0%BA%D0%B8%D0%BC%20%D0%BB%D1%96%D1%82%D0%BD%D1%96%D0%BC%20%D1%87%D0%B0%D1%81%D0%BE%D0%BC); OptanonConsent=isMarketing=1&isStatistic=1; bitget_lang=uk; BITGET_LOCAL_COOKIE={%22bitget_lang%22:%22uk%22%2C%22bitget_unit%22:%22USD%22%2C%22bitget_showasset%22:true%2C%22bitget_theme%22:%22black%22%2C%22bitget_layout%22:%22right%22%2C%22bitget_valuationunit%22:2%2C%22bitgt_login%22:false%2C%22bitkeep_unit%22:%22usd%22%2C%22bitkeep_token%22:%225ce6fda4f7a4ff7d29f84d218eb4d6b4d1119744cdf3d13ef0a21243e901f4b5%22%2C%22bitkeep_dxtoken%22:%22666b1a26b5zEhaXlVL4vNHH5VlGSG7c766QZF0d21%22%2C%22bitkeep_domain%22:%22%22%2C%22show_nologin_time%22:0%2C%22theme%22:%22white%22%2C%22global_theme%22:%22white%22%2C%22bitget_currency%22:%22%22%2C%22source_page_type%22:1%2C%22bitget_terminalCode%22:%22b787e5a17143ed5a635ea872e22b3dfc%22%2C%22bitkeep_im%22:%22b787e5a17143ed5a6269746b656570635ea872e22b3dfc%22}; AF_SYNC=1718911837812; theme=black; dy_token=6675a00fi0LmdKThI9TSmUjCthbk8bnfikpcc3Z1; _ga_B8RNGYK5MS=GS1.1.1719040047.65.0.1719040047.0.0.0; _cfuvid=SUlEYEDzjHM86ro3aDOQL7p3njn0O057fEQgAe8OFuE-1719060055909-0.0.1.1-604800000; _ym_isad=2; __cf_bm=CkfDjiQx6fxa9KSRs2XHGLg5tgMDfTfggipRQgF3INI-1719075102-1.0.1.1-CYHFwvmS64DSgD3UcL_0XPJRTmg01LFJuja4C7SVPOV_9MNJ.lCJLEk_hI4DJQbr13G40YRxiTX_lzzKcFb1yg; bt_rtoken=; bt_sessonid=; bt_newsessionid=; __ar_v4=R3652JF77NH6ZC5OBZHWIH%3A20240616%3A226%7C2WBEMJJKHFG5PLSUZ7B5OY%3A20240616%3A226; _ga_Z8Q93KHR0F=GS1.1.1719075110.80.1.1719075146.24.0.0',
			Referer: "https://www.bitget.com/uk/events/candy-bomb",
			"Referrer-Policy": "unsafe-url",
		},
		body: '{"airDropType":0}',
		method: "POST",
	}).then(async (res) => {
		// const test = await res.text();

		// console.log(test);
		console.log(await res.status);
		console.log(await res.statusText);

		try {
			return res?.json();
		} catch (error) {
			return { nodata: true };
		}
	});

	await new Promise((resolve) => setTimeout(resolve, 5000));

	async function processArrayAsync() {
		const results: any[] = [];

		if (data?.nodata) return results;

		for (const item of data?.data?.processingActivities) {
			try {
				const reward = await fetch("https://www.bitget.com/v1/act/candyBombNew/myReward", {
					headers: {
						accept: "application/json, text/plain, */*",
						"accept-language": "uk,en;q=0.9,en-US;q=0.8,uk-UA;q=0.7,pl;q=0.6",
						baggage:
							"sentry-environment=online,sentry-release=068a2da0b0cf49358f939ba48fefc0fee166c0d2,sentry-public_key=025530a665684b8e9477023795a9280b,sentry-trace_id=ed3ce496180b45fabfb5df8008c6d68f",
						"content-type": "application/json;charset=UTF-8",
						deviceid: "e4af26b39f2f8ff040816f5b31744913",
						language: "uk_UA",
						locale: "uk_UA",
						priority: "u=1, i",
						"sentry-trace": "ed3ce496180b45fabfb5df8008c6d68f-8e3f3270ca3253c6-0",
						terminalcode: "312fb273ec84c49976a35981fc49d029",
						terminaltype: "1",
						cookie:
							'_ga=GA1.1.521948910.1699264709; afUserId=8408708b-af5b-4e69-8916-45ebc3615662-p; _ym_uid=169926473090529640; i18n_redirected=uk; _dx_kvani5r=f5de6fbd98f10b798158e44e8b9519342a02b763b733ce720e1ab1e9087e54fa1a943d45; captcha_v4_user=7a1073c8cdba4af5a34127cfc7a4696d; _tt_enable_cookie=1; _ttp=swiLjuEHk8ataYaAI1CW2urBZhf; _dx_uzZo5y=1706192757733Yai4FiQuFvDwF03rClIXQnvhdcM9OEfF; g_state={"i_l":0}; _ym_d=1715151874; __adroll_fpc=6da75cbe603b9547ce6ca3eda955436d-1715961654743; _ga_Z8Q93KHR0F=deleted; _ga_BW4GVE68H3=GS1.1.1717516211.9.1.1717516291.0.0.0; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%228448751175%22%2C%22first_id%22%3A%22w-042226739-1699264708272-345758804%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThiYmQ3ZTU0ZmM3YWYtMGQ2MDVjMjU1ZDMzMGYtMjYwMzEwNTEtMTMyNzEwNC0xOGJiZDdlNTRmZDEwOWEiLCIkaWRlbnRpdHlfbG9naW5faWQiOiI4NDQ4NzUxMTc1In0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%228448751175%22%7D%2C%22%24device_id%22%3A%2218bbd7e54fc7af-0d605c255d330f-26031051-1327104-18bbd7e54fd109a%22%7D; _ga_39NRXSECDR=GS1.1.1718046628.4.1.1718046647.41.0.0; OptanonAlertBoxClosed=Wed%20Jun%2012%202024%2020:30:58%20GMT+0300%20(%D0%B7%D0%B0%20%D1%81%D1%85%D1%96%D0%B4%D0%BD%D0%BE%D1%94%D0%B2%D1%80%D0%BE%D0%BF%D0%B5%D0%B9%D1%81%D1%8C%D0%BA%D0%B8%D0%BC%20%D0%BB%D1%96%D1%82%D0%BD%D1%96%D0%BC%20%D1%87%D0%B0%D1%81%D0%BE%D0%BC); OptanonConsent=isMarketing=1&isStatistic=1; bitget_lang=uk; BITGET_LOCAL_COOKIE={%22bitget_lang%22:%22uk%22%2C%22bitget_unit%22:%22USD%22%2C%22bitget_showasset%22:true%2C%22bitget_theme%22:%22black%22%2C%22bitget_layout%22:%22right%22%2C%22bitget_valuationunit%22:2%2C%22bitgt_login%22:false%2C%22bitkeep_unit%22:%22usd%22%2C%22bitkeep_token%22:%225ce6fda4f7a4ff7d29f84d218eb4d6b4d1119744cdf3d13ef0a21243e901f4b5%22%2C%22bitkeep_dxtoken%22:%22666b1a26b5zEhaXlVL4vNHH5VlGSG7c766QZF0d21%22%2C%22bitkeep_domain%22:%22%22%2C%22show_nologin_time%22:0%2C%22theme%22:%22white%22%2C%22global_theme%22:%22white%22%2C%22bitget_currency%22:%22%22%2C%22source_page_type%22:1%2C%22bitget_terminalCode%22:%22b787e5a17143ed5a635ea872e22b3dfc%22%2C%22bitkeep_im%22:%22b787e5a17143ed5a6269746b656570635ea872e22b3dfc%22}; AF_SYNC=1718911837812; theme=black; dy_token=6675a00fi0LmdKThI9TSmUjCthbk8bnfikpcc3Z1; _ga_B8RNGYK5MS=GS1.1.1719040047.65.0.1719040047.0.0.0; _cfuvid=SUlEYEDzjHM86ro3aDOQL7p3njn0O057fEQgAe8OFuE-1719060055909-0.0.1.1-604800000; _ym_isad=2; bt_rtoken=; bt_sessonid=; bt_newsessionid=; __cf_bm=Qw8UYPCnxEALEuMoaZEHEq7X1L4MqIDlytCnYPtG4Qo-1719087413-1.0.1.1-WAcx5meY4hypi7bIPPmLkdr7dutqXAqC.KEkeCaAyw6xCZcQI8DF4iwHc0FQt1ADTF5MCQBm2bgUPEQlfjDHOw; _ym_visorc=b; __ar_v4=R3652JF77NH6ZC5OBZHWIH%3A20240616%3A240%7C2WBEMJJKHFG5PLSUZ7B5OY%3A20240616%3A240; _ga_Z8Q93KHR0F=GS1.1.1719087414.82.1.1719087828.60.0.0',
						Referer: `https://www.bitget.com/uk/events/candy-bomb/detail/${item.id}`,
						"Referrer-Policy": "unsafe-url",
					},
					body: `{"activityId":${item.id}}`,
					method: "POST",
				}).then((res) => {
					console.log(res.status);
					console.log(res.statusText);

					return res?.text();
				});

				let rewData = undefined;

				try {
					rewData = JSON.parse(reward);
				} catch (error) {
					rewData = undefined;
				}

				results.push({ ...item, reward: rewData && rewData?.data });
			} catch (error) {
				console.error("Error:", error);
			}

			await new Promise((resolve) => setTimeout(resolve, 2000));
		}

		return results;
	}

	const processingActivities = await processArrayAsync();

	const withData = processingActivities?.every((df) => !!df?.reward);

	console.log(withData);

	res.setHeader("Cache-Control", withData ? "s-maxage=3600" : "s-maxage=30");
	res.status(200).json({ processingActivities, time: new Date().toISOString() });
}
