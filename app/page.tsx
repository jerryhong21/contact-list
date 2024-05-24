"use client";

import Head from "next/head";
import ContactTable from "@/components/contact-table";
import SearchBar from "@/components/searchbar";
import FilterOptions from "@/components/filter-options";
import { useState } from "react";

export default function Home() {
	const [searchStr, setSearchStr] = useState("");
	const [cityFilter, setCityFilter] = useState("");
	const [companyFilter, setCompanyFilter] = useState("");

	return (
		<main className="min-h-screen bg-gray-100 p-6">
			<Head className="text-center">Contact List</Head>
			<div className="container mx-auto bg-white shadow-md rounded-lg p-4">
				<h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#931639] to-[#C13584] text-white p-6 rounded-lg shadow-lg text-center">
					Contact List
				</h1>
				<div className="flex justify-between items-center mb-4">
					<SearchBar
						searchStr={searchStr}
						setSearchStr={setSearchStr}
					/>
					<FilterOptions
						setCityFilter={setCityFilter}
						setCompanyFilter={setCompanyFilter}
					/>
				</div>
				<ContactTable
					searchStr={searchStr}
					cityFilter={cityFilter}
					companyFilter={companyFilter}
				/>
			</div>
		</main>
	);
}
