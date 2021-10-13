import React from "react";
import { useFetch } from "./../hooks/useFetch";
import Loader from "./Loader";
import Message from "./Message";

const SelectList = ({ title, url, handleChange }) => {
	const { data, error, loading } = useFetch(url);

	if (!data) return null;
	if (error) {
		return <Message msg={`Error ${error.status}: ${error.statusText}`} />;
	}

	let id = `select-${title}`;
	let label = title.charAt(0).toUpperCase() + title.slice(1) + ": ";
	let options = data.response[title];

	return (
		<div>
			<label htmlFor={id}>{label}</label>
			{loading && <Loader />}
			<select name={id} id={id} onChange={handleChange}>
				<option value="">{`Elige uno de los ${title}`}</option>
				{data &&
					options.map((el, index) => (
						<option key={index} value={el}>
							{el}
						</option>
					))}
			</select>
		</div>
	);
};

export default SelectList;
