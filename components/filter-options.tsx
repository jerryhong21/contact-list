"use client";
import { ChangeEvent, useState } from "react";

type setFn = (value: string) => void;
type EventOnChange = (e: ChangeEvent<HTMLInputElement>) => void;

interface FilterOptionsProps {
	cityFilter: string;
	setCityFilter: setFn;
	companyFilter: string;
	setCompanyFilter: setFn;
}

const FilterOptions = ({
	cityFilter,
	setCityFilter,
	companyFilter,
	setCompanyFilter,
}: FilterOptionsProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleCityFilterChange: EventOnChange = (e) => {
		setCityFilter(e.target.value);
	};
	const handleCompanyFilterChange: EventOnChange = (e) => {
		setCityFilter(e.target.value);
	};
	const handleClearFilter = () => {
		setCityFilter("");
		setCompanyFilter("");
	};

	return (
		<div className="relative">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="bg-[#931639] text-white px-4 py-2 rounded-md">
				Filter
			</button>
			{isOpen && (
				<div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
					<div className="p-4">
						<div className="mt-4">
							<label className="block text-sm">City</label>
							<input
								type="text"
								className="mt-1 p-2 border border-gray-300 rounded-md w-full"
								onChange={handleCityFilterChange}
								value={cityFilter}
							/>
						</div>
						<div className="mt-4">
							<label className="block text-sm">Company</label>
							<input
								type="text"
								className="mt-1 p-2 border border-gray-300 rounded-md w-full"
								onChange={handleCompanyFilterChange}
								value={companyFilter}
							/>
						</div>
						<button
							className="mt-4 text-[#931639]"
							onClick={handleClearFilter}>
							Clear all filters
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default FilterOptions;
