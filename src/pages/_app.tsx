import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useState } from "react";


export default function App({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(
		() =>
		  new QueryClient({
			defaultOptions: {
			  queries: {
				retry: false,
				refetchOnWindowFocus: false,
				refetchOnReconnect: false,
				refetchOnMount: false,
			  },
			},
		  }),
	  )

	return (
		<QueryClientProvider client={queryClient}>
			<NextUIProvider>
				<Component {...pageProps} />
			</NextUIProvider>
		</QueryClientProvider>
	);
}
