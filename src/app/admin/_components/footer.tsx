import React from 'react';

const Footer = () => {
	return (
		<div className=" flex items-center flex-col lg:flex-row justify-between my-4 px-2 lg:px-8">
			<p className="text-gray-600 text-center text-sm lg:text-base py-2">
				© {new Date().getFullYear()} AGCOMS. All rights reserved.
			</p>
			<a
				href="https://meltechgrp.com"
				target="_blank"
				rel="noopener noreferrer"
				className="underline text-[10px]">
				Built by MEL Technologies
			</a>
		</div>
	);
};

export default Footer;
