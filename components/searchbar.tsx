"use client";

import { ChangeEvent, useState } from "react";
type EventOnChange = (e: ChangeEvent<HTMLInputElement>) => void;


interface SearchBarProps {
    searchStr: string;
    setSearchStr: (value: string) => void;
}

const SearchBar = ({ searchStr, setSearchStr }: SearchBarProps) => {
	const handleChange: EventOnChange = (e) => {
		setSearchStr(e.target.value);
	};

	return (
		<input
			type="text"
			placeholder="Search"
			className="p-2 border focus:border-[#931639] focus:outline-none rounded-md w-full max-w mr-5"
			onChange={handleChange}
			value={searchStr}
		/>
	);
};

export default SearchBar;
