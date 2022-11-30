import { FiAlertCircle } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/slices/todosSlice";
import { toggleConfirmModal } from "../redux/slices/modalSlice";

const ConfirmModal = (props) => {
  const { id, setId } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTodo(id));
    dispatch(toggleConfirmModal());
    setId("");
  };

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto overflow-x-hidden flex justify-center items-center">
      <div className="relative bg-white m-6 rounded-lg shadow dark:bg-gray-700">
        <button
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          onClick={() => dispatch(toggleConfirmModal())}
        >
          <IoClose className="w-5 h-5" />
        </button>
        <div className="p-6 text-center">
          <FiAlertCircle className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Note will be deleted permanently
          </h3>
          <button
            className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mx-4 my-2 sm:my-0"
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 mx-4 my-2 sm:my-0 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            onClick={() => dispatch(toggleConfirmModal())}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
