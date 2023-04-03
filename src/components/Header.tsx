import Link from "next/link";
import React, { useState } from "react";

export const Header = () => {
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<header>
			<nav className='hidden lg:flex sticky p-2 bg-[#6366F1] text-white lg:items-center lg:justify-between'>
				<h1>Confectionaries</h1>
				<ul>
					<li className='inline-flex mx-2 text-white'>
						<Link href='/create' className='text-white'>
							Create Order
						</Link>
					</li>
					<li className='inline-flex mx-2 text-white'>
						<Link href='/' className='text-white'>
							All Orders
						</Link>
					</li>
					<li className='inline-flex mx-2 text-white'>
						<Link href='/' className='text-white'>
							About
						</Link>
					</li>
					<li className='inline-flex mx-2 text-white'>
						<Link href='/' className='text-white'>
							Contact Us
						</Link>
					</li>
				</ul>
			</nav>
			<nav className='lg:hidden sticky p-2 bg-[#6366F1] text-white flex justify-between items-center'>
				<h1>Confectionaries</h1>
				<i
					className='fa-solid fa-bars text-[25px]'
					onClick={() => setShowSidebar(!showSidebar)}
				></i>
			</nav>
			<div
				className={`lg:hidden  block top-0 right-0 w-[50vw] bg-[#6366F1]  p-2  text-white fixed h-full ease-in-out duration-700 ${
					showSidebar ? "translate-x-0 " : "translate-x-full"
				}`}
			>
				<ul>
					<li className='mt-12 text-right  text-[28px]'>
						<i
							className='fa-solid fa-xmark'
							onClick={() => setShowSidebar(!showSidebar)}
						></i>
					</li>
					<li className=' mt-16 text-white'>
						<Link href='/create' className='text-white'>
							Create Order
						</Link>
					</li>
					<li className=' mt-4 text-white'>
						<Link href='/' className='text-white'>
							All Orders
						</Link>
					</li>
					<li className=' mt-4 text-white'>
						<Link href='/' className='text-white'>
							About
						</Link>
					</li>
					<li className=' mt-4 text-white'>
						<Link href='/' className='text-white'>
							Contact Us
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};
