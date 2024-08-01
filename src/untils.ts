import fs from "fs";

export const cacheData = (name: string, data: any) => {
	fs.writeFileSync(name, JSON.stringify(data, null, 2));
};
export const checkCacheData = (name: string) => fs.existsSync(name);

export const getCacheData = (name: string) => fs.readFileSync(name).toString();
