import Navbar from "../components/nav/Navbar";
import "../styles/globals.css";
import { PersistGate } from "redux-persist/integration/react";
import { Store, Persistor } from "../redux/store";
import { Provider, useSelector } from "react-redux";
import Sidebar from "../components/sidebar/sidebar";
import "../styles/svg.css";
import Head from "next/head";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import countapi from "countapi-js";
import State from "../types/state";

const Msg = (resumeId: any) => {
	return (
		<div className="flex flex-col">
			<span>You were watching</span>
			<span className={"uppercase font-bold text-xl"}>
				{resumeId[0]?.split("-").join(" ")}
			</span>
			<span>
				To Continue Press{" "}
				<span className="text-yellow-300 text-xl ">here</span>
			</span>
		</div>
	);
};

const App = ({ Component, pageProps }: any) => {
	const [visit, setVisit] = useState(0);
	const { theme, resumeId } = useSelector((state: State) => state);
	const router = useRouter();
	useEffect(() => {
		localStorage.removeItem("persist:root");
		if (resumeId)
			if (resumeId) toast.info(<Msg resumeId={resumeId.data} />);
		countapi
			.update("Anime-Jikan", process.env.key, 1)
			.then((result: any) => {
				// console.log(process.env.key);
				setVisit(result.value);
			});
	}, []);
	return (
		<div className={`${theme.background}  `}>
			<Head>
				<meta charSet="utf-8" />
				<link rel="icon" href={"/icon.svg"} />
				<link rel="manifest" href="/manifest.json" />

				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-2048-2732.jpg"
					media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
				/>
				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-2732-2048.jpg"
					media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
				/>
				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-1668-2388.jpg"
					media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
				/>
				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-2388-1668.jpg"
					media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
				/>
				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-1536-2048.jpg"
					media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
				/>
				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-2048-1536.jpg"
					media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
				/>
				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-1668-2224.jpg"
					media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
				/>
				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-2224-1668.jpg"
					media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
				/>
				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-1620-2160.jpg"
					media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
				/>
				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-2160-1620.jpg"
					media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
				/>
				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-1284-2778.jpg"
					media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
				/>
				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-2778-1284.jpg"
					media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
				/>
				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-1170-2532.jpg"
					media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
				/>
				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-2532-1170.jpg"
					media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
				/>
				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-1125-2436.jpg"
					media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
				/>
				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-2436-1125.jpg"
					media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
				/>
				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-1242-2688.jpg"
					media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
				/>
				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-2688-1242.jpg"
					media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
				/>
				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-828-1792.jpg"
					media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
				/>
				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-1792-828.jpg"
					media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
				/>
				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-1242-2208.jpg"
					media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
				/>
				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-2208-1242.jpg"
					media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
				/>
				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-750-1334.jpg"
					media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
				/>
				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-1334-750.jpg"
					media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
				/>
				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-640-1136.jpg"
					media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
				/>
				<link
					rel="apple-touch-startup-image"
					href="favicon/apple-splash-1136-640.jpg"
					media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
				/>

				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta
					name="msapplication-TileImage"
					content="/favico/ms-icon-144x144.png"
				/>
				<meta name="theme-color" content="#1a1c20" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="Premium anime streaming experience "
				/>
				<meta
					name="keywords"
					content="Watching,Popular,Streaming,Free,Fast,1080p,"
				/>
			</Head>
			<Sidebar visit={visit} />
			<div className="flex justify-between">
				<Navbar visit={visit} />
				<Component {...pageProps} />
			</div>
			<ToastContainer
				position={"top-center"}
				onClick={() =>
					router.push(
						`/watching/${resumeId.data[0]}/${resumeId.data[1]}`
					)
				}
				autoClose={5000}
				transition={Flip}
				draggablePercent={30}
			/>
		</div>
	);
};

const MYapp = ({ Component, pageProps }: any) => (
	<Provider store={Store}>
		<PersistGate loading={null} persistor={Persistor}>
			<App Component={Component} pageProps={pageProps} />
		</PersistGate>
	</Provider>
);
export default MYapp;
