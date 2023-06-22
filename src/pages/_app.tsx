import ThemeProvider from "@/context/themeContext";
import UserContext from "@/context/userContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>E-commerce</title>
				<meta
					name="description"
					content="A melhor loja de roupas do Brasil"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>

			<UserContext>
				<ThemeProvider>
					<Component {...pageProps} />
				</ThemeProvider>
			</UserContext>
			<ToastContainer />
		</>
	);
}
