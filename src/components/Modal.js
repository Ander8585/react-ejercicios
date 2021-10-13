import "./Modal.css";

const Modal = ({ children, isOpen, closeModal }) => {
	return (
		<article onClick={closeModal} className={`modal ${isOpen && "is-open"}`}>
			<div onClick={(e) => e.stopPropagation()} className="modal-container">
				<button className="modal-close" onClick={closeModal}>
					X
				</button>
				{children}
			</div>
		</article>
	);
};

export default Modal;
