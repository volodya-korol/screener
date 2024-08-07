export interface ProcessingActivities {
	activityStatus: number;
	airDropTypeList: number[];
	coinContent: any[];
	coinIcon: string;
	contentDTOList: any[];
	countDownStatus: number;
	countDownTime: string;
	desc: string;
	endTime: string;
	iconDtoList: any[];
	id: string;
	ieoTotal: number;
	ieoTotalUsdt: number;
	infiniteMode: number;
	inviteStatus: number;
	isTop: number;
	localInviteStatus: boolean;
	name: string;
	newContractUserSignUp: boolean;
	newUserSignUp: boolean;
	newUserStatus: boolean;
	oldUserSignUp: boolean;
	oldUserStatus: boolean;
	remind: boolean;
	rewardCarousels: RewardCarousel[];
	startTime: string;
	totalPeople: number;
	reward: Reward[];
}

export interface RewardCarousel {
	award: number;
	awardUSDT: number;
	coinName: string;
	targetType: number;
	threshold: string;
	unit: string;
}

export interface Reward {
	amount: string;
	awardLimit: string;
	businessLineList: string[];
	coinIdList: number[];
	coinNameList: string[];
	contractSymbolIdList: any[];
	everySign: string;
	infiniteMode: number;
	newStatus: boolean;
	rewardCarouselVo: RewardCarouselVo;
	rewardSign: string;
	sendSign: string;
	statisticalType: number;
	symbolCodeDisplayName: any[];
	symbolId: string[];
	targetRelations: TargetRelation[];
	targetType: number;
}

export interface RewardCarouselVo {
	award: number;
	awardUSDT: number;
	coinName: string;
	targetType: number;
	threshold: string;
	unit: string;
}

export interface TargetRelation {
	point: number;
	volume: number;
}

const s = {
	amount: "10900000",
	awardLimit: "74000",
	businessLineList: [],
	coinIdList: [335],
	coinNameList: ["TEL"],
	contractSymbolIdList: [],
	everySign: "null",
	infiniteMode: 1,
	newStatus: false,
	rewardCarouselVo: {
		award: 7469.16,
		awardUSDT: 17.50771104,
		coinName: "TEL",
		targetType: 4,
		threshold: "1000",
		unit: "U",
	},
	rewardSign: "0",
	sendSign: "3963",
	statisticalType: 1,
	symbolCodeDisplayName: [],
	symbolId: ["TEL"],
	targetRelations: [
		{
			maxVolume: 1000,
			point: 1,
			volume: 100,
		},
		{
			maxVolume: 5000,
			point: 2,
			volume: 1000,
		},
		{
			maxVolume: 10000,
			point: 4,
			volume: 5000,
		},
		{
			maxVolume: 30000,
			point: 6,
			volume: 10000,
		},
		{
			point: 8,
			volume: 30000,
		},
	],
	targetType: 4,
};


type SocialMedia = {
    mediaType: number;
    mediaUrl: string;
};

type NewUserCondition1 = {
    token: string;
    amount: string;
};

type TradeList = {
    token: string;
    amount: string;
};

type NewUserCondition2 = {
    depositAmount: string;
    tradeList: TradeList[];
};

export interface Splash {
    code: string;
    type: number;
    totalPrizePool: string;
    token: string;
    tokenFullName: string;
    icon: string;
    depositStart: number;
    participants: number;
    depositEnd: number;
    applyStart: number;
    applyEnd: number;
    openTime: number;
    publishTime: number;
    newUserPrizeTotal: string;
    newUserPrize: string;
    newUserPrizeToken: string;
    oldUserPrizeTotal: string;
    oldUserPrize: string;
    oldUserPrizeToken: string;
    firstDepositNumber: string;
    firstDepositToken: string;
    secondDepositNumber: string;
    secondTradeToken: string;
    supportChain: any;
    remark: string;
    limitCountry: string;
    kycLevel: number;
    limitCountryDesc: any;
    userKyc: any;
    isKyb: any;
    isCountryLimit: boolean;
    newLastUserWinTime: number;
    oldLastUserWinTime: number;
    socialMediaList: SocialMedia[];
    advertisingList: any;
    systemTime: number;
    totalTradeValue: string;
    taskType: number;
    tradeUserPrizeTotal: string;
    tradePrizeToken: string;
    tradeStart: number;
    tradeEnd: number;
    tradeApplyStart: number;
    tradePublishTime: number;
    tradeLimitAmount: string;
    tradeSymbolList: string;
    tradeToken: string;
    tradeAirdropTop: string;
    prizePool: any;
    awardToken: any;
    coinAssetType: number;
    prizeType: number;
    newUserCondition1: NewUserCondition1[];
    newUserCondition2: NewUserCondition2;
    oldUserCondition1: any;
    oldUserCondition2: any;
}

export type SplashRes = Splash[]