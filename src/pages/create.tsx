import { Header } from "@/components";
import { Orders } from "@/components/Orders";
import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";
import React, { BaseSyntheticEvent, ChangeEvent, useState } from "react";

export const Create = () => {
	const [details, setDetails] = useState({
		customer: "",
		duration: "",
		order_name: "",
	});

	const router = useRouter();

	const onChange = (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
		const { name, value } = e.target;

		setDetails({ ...details, [name]: value });
	};

	const onSubmit = (e: BaseSyntheticEvent) => {
		e.preventDefault();
		const getItem = localStorage.getItem("orders");
		if (getItem) {
			const allEntries = JSON.parse(getItem);
			const detail = {
				order_name: details.order_name,
				customer: details.customer,
				duration: details.duration,
				id: uuid(),
				createdAt:
					details.duration === "7"
						? new Date().getTime() + 7 * 60 * 1000
						: new Date().getTime() + 5 * 60 * 1000,
			};
			allEntries.push(detail);
			localStorage.setItem("orders", JSON.stringify(allEntries));
			router.push("/");
		} else {
			const allEntries: Orders[] = [];
			const detail = {
				order_name: details.order_name,
				customer: details.customer,
				duration: details.duration,
				id: uuid(),
				createdAt:
					details.duration === "7"
						? new Date().getTime() + 7 * 60 * 1000
						: new Date().getTime() + 5 * 60 * 1000,
			};
			allEntries.push(detail);
			localStorage.setItem("orders", JSON.stringify(allEntries));
			router.push("/");
		}
		setDetails({ customer: "", order_name: "", duration: "" });
	};
	return (
		<div>
			<Header />
			<div className=' flex flex-col items-center justify-center h-screen text-lg'>
				<form
					action=''
					className='bg-black text-white px-8 py-4 rounded-md w-2/5'
					onSubmit={onSubmit}
				>
					<div>
						<label htmlFor='customer_name' className='block my-2 text-2xl'>
							Customer Name
						</label>
						<input
							type='text'
							id='customer_name'
							name='customer'
							required
							value={details.customer}
							onChange={onChange}
							className='border-slate-800 w-full p-1 text-black  border-solid border-[0.5px] block rounded-md text-xl my-4 focus:p-1 focus:my-4'
						/>
					</div>
					<div>
						<label htmlFor='duration' className='block my-2 text-2xl'>
							Duration
						</label>
						<select
							name='duration'
							id='duration'
							required
							className='border-white my-4 w-full p-1 text-white border-solid block border-[0.5px] rounded-md text-xl focus:p-1 focus:my-4'
							value={details.duration}
							onChange={onChange}
						>
							<option value=''>Select Duration</option>
							<option value='5'>5 minutes</option>
							<option value='7'>7 minutes</option>
						</select>
					</div>
					<div>
						<label htmlFor='order_name' className='block my-2 text-2xl'>
							Order Name
						</label>
						<input
							type='text'
							id='order_name'
							name='order_name'
							required
							value={details.order_name}
							onChange={onChange}
							className='border-slate-800 my-4 w-full p-1 text-black border-solid block border-[0.5px] rounded-md text-xl focus:p-1 focus:my-4'
						/>
					</div>
					<button className='text-center rounded-md bg-green-600 w-full p-2'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Create;
