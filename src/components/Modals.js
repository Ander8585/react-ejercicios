import Modal from "./Modal";
import { useModals } from "./../hooks/useModals";
import ContactForm from "./ContactForm";
import ModalPortal from "./ModalPortal";

const Modals = () => {
	const [isOpenModal1, openModal1, closeModal1] = useModals(false);
	const [isOpenModal2, openModal2, closeModal2] = useModals(false);
	const [isOpenModalForm, openModalForm, closeModalForm] = useModals(false);
	const [isOpenPortal, openModalPortal, closeModalPortal] = useModals(false);

	return (
		<div>
			<h2>Modales</h2>
			<button onClick={openModal1}>Modal 1</button>
			<Modal isOpen={isOpenModal1} closeModal={closeModal1}>
				<h3>Modal 1</h3>
				<p>Hola este es el contenido de mi Modal 1</p>
				<img src="https://placeimg.com/400/400/animals" alt="Animals" />
			</Modal>
			<button onClick={openModal2}>Modal 2</button>
			<Modal isOpen={isOpenModal2} closeModal={closeModal2}>
				<h3>Otro Modal</h3>
				<p>Hola este es el contenido de mi Modal 1</p>
				<img src="https://placeimg.com/400/400/nature" alt="Nature" />
			</Modal>
			<button onClick={openModalForm}>Formulario de Contactos</button>
			<Modal isOpen={isOpenModalForm} closeModal={closeModalForm}>
				<ContactForm />
			</Modal>
			<button onClick={openModalPortal}>Modal en Portal</button>
			<ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
				<h3>Modal en Portal</h3>
				<p>
					Este es el contenido de un portal que carga en un nodo diferente a
					donde carga nuestra app de React gracias a un React Portal
				</p>
				<img src="https://placeimg.com/400/400/tech" alt="Tech" />
			</ModalPortal>
		</div>
	);
};

export default Modals;
