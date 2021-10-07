import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const CrudApi = () => {
	const [db, setDb] = useState([]);
	const [dataToEdit, setDataToEdit] = useState(null);

	const createData = (data) => {
		data.id = Date.now();
		setDb([...db, data]);
	};

	const updateData = (data) => {
		let newData = db.map((el) => (el.id === data.id ? data : el));
		setDb(newData);
	};

	const deleteData = (element) => {
		let isDelete = window.confirm(
			`Estas seguro de eliminar el registro con el nombre "${element.name}" e ID "${element.id}"`
		);

		if (isDelete) {
			let newData = db.filter((el) => el.id !== element.id);
			setDb(newData);
		}
	};

	return (
		<div>
			<h2>CRUD App</h2>
			<article className="grid-1-2">
				<CrudForm
					createData={createData}
					updateData={updateData}
					dataToEdit={dataToEdit}
					setDataToEdit={setDataToEdit}
				/>
				<CrudTable
					data={db}
					setDataToEdit={setDataToEdit}
					deleteData={deleteData}
				/>
			</article>
		</div>
	);
};

export default CrudApi;
