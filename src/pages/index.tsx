import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Header } from "@/components";
import { Orders } from "@/components/Orders";

export default function Home() {
	return (
		<>
			<Header />
			<Orders />
		</>
	);
}
