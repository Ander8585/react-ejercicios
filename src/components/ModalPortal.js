import ReactDOM from "react-dom";
import "./Modal.css";

const ModalPortal = ({ children, isOpen, closeModal }) => {
	return ReactDOM.createPortal(
		<article onClick={closeModal} className={`modal ${isOpen && "is-open"}`}>
			<div onClick={(e) => e.stopPropagation()} className="modal-container">
				<button className="modal-close" onClick={closeModal}>
					X
				</button>
				{children}
			</div>
		</article>,
		document.getElementById("modal")
	);
};

export default ModalPortal;
