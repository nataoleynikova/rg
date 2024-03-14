import React from "react";
import { getPagesArray } from "../utilits/page.js";

const Pagination = ({totalPages, changePage}) => {
	let pagesArray = getPagesArray(totalPages);

	return (
		<div className="page_buttons">
			{pagesArray.map(p =>
				<button
					onClick={() => changePage(p)}
					key={p}>
						<p>{p}</p>
				</button>
			)}
		</div>
	);
};

export default Pagination;