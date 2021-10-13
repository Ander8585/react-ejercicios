import React, { useState } from "react";
import SelectList from "./SelectList";
/* d81a7ac7-976d-4e1e-b7d3-b1979d791b6cs */
const SelectsAnidados = () => {
	const [state, setState] = useState("");
	const [town, setTown] = useState("");
	const [suburb, setSuburb] = useState("");

	const TOKEN = "ca4c27ff-0527-4e84-a9da-1d8729135f0a";

	return (
		<div>
			<h2>Selects Anidados</h2>
			<SelectList
				title="estado"
				url={`https://api.copomex.com/query/get_estados?token=pruebas`} //${TOKEN}
				handleChange={(e) => {
					setState(e.target.value);
				}}
			/>
			{state && (
				<SelectList
					title="municipios"
					url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=pruebas`} //${TOKEN}
					handleChange={(e) => {
						setTown(e.target.value);
					}}
				/>
			)}
			{town && (
				<SelectList
					title="colonia"
					url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=pruebas`} //${TOKEN}
					handleChange={(e) => {
						setSuburb(e.target.value);
					}}
				/>
			)}

			<pre>
				<code>
					{state}-{town}-{suburb}
				</code>
			</pre>
		</div>
	);
};

export default SelectsAnidados;
