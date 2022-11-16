import { FiAlertCircle } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/slices/todosSlice";
import { toggleModal } from "../redux/slices/modalSlice";

const Modal = (props) => {
  const { id, setId } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTodo(id));
    dispatch(toggleModal());
    setId("");
  };

  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className="overflow-y-auto overflow-x-hidden fixed inset-0 flex min-h-screen min-w-full justify-center items-center"
      aria-hidden="true"
    >
      <div className="relative p-4 max-w-md">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="popup-modal"
            onClick={() => dispatch(toggleModal())}
          >
            <IoClose className="w-5 h-5" />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <FiAlertCircle className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <button
              data-modal-toggle="popup-modal"
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center m-2 sm:my-0"
              onClick={handleDelete}
            >
              Yes, I'm sure
            </button>
            <button
              data-modal-toggle="popup-modal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 m-2 sm:my-0 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              onClick={() => dispatch(toggleModal())}
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
