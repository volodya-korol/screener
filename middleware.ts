import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const requestHeaders = new Headers(request.headers);

	console.log("====================================");
	console.log("some");
	console.log("====================================");

	return NextResponse.next({
		request: {
			// New request headers
			headers: requestHeaders,
		},
	});
}

export const config = {
	matcher: 'https://www.bitget.com/:path*',
  }