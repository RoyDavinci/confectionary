import { data } from "@/helpers/data";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { renderer } from "@/helpers/render";
import Link from "next/link";

export interface Orders {
	order_name: string;
	customer: string;
	duration: string;
	id: string;
	createdAt: number;
}

export const Orders = () => {
	const [orders, setOrders] = useState<Orders[]>([]);

	const getItems = () => {
		const allItems = localStorage.getItem("orders");
		if (allItems) {
			const data = JSON.parse(allItems) as Orders[];
			setOrders(data);
		}
	};

	const deleteOrder = (id: string) => {
		const allItems = localStorage.getItem("orders");
		if (allItems) {
			const data = JSON.parse(allItems) as Orders[];
			const filtered = data.filter((item) => item.id !== id);
			localStorage.setItem("orders", JSON.stringify(filtered));
			getItems();
		}
	};

	useEffect(() => {
		getItems();
	}, []);

	return (
		<div>
			{orders.length <= 0 ? (
				<div className='flex flex-col justify-center h-screen items-center'>
					<h1>Create Order</h1>
					<Link
						href='/create'
						className='bg-blue-500 text-center text-white p-2 rounded-md my-2 w-[150px] text-2xl'
					>
						Create
					</Link>
				</div>
			) : (
				<div className='relative overflow-x-auto my-8 px-8'>
					<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
						<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
							<tr>
								<th scope='col' className='px-6 py-3'>
									Customer
								</th>
								<th scope='col' className='px-6 py-3'>
									Order Name
								</th>
								<th scope='col' className='px-6 py-3'>
									Time
								</th>
								<th scope='col' className='px-6 py-3'>
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{orders.map((item) => {
								return (
									<tr
										key={item.id}
										className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
									>
										<th
											scope='row'
											className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
										>
											{item.customer}
										</th>
										<td className='px-6 py-4'>{item.order_name}</td>
										<td className='px-6 py-4'>
											<Countdown
												date={Date.now() + (item.createdAt - Date.now())}
												renderer={renderer}
											/>
										</td>
										<td className='px-6 py-4'>
											<i
												className='fa-solid fa-trash xl text-red-600'
												onClick={() => deleteOrder(item.id)}
											></i>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};
