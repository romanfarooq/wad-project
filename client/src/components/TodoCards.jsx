import { VscEdit } from "react-icons/vsc";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toggleConfirmModal, toggleNoteModal } from "../redux/slices/modalSlice";

const TodoCards = (props) => {
  const { todo, setId } = props;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    setId(id);
    dispatch(toggleConfirmModal());
  };

  const handleEdit = (id) => {
    setId(id);
    dispatch(toggleNoteModal());
  };

  return (
    <div className="w-full flex flex-col justify-between items-start dark:bg-gray-800 bg-gray-100 dark:border-gray-700 rounded-lg shadow mb-6 py-5 px-4">
      <div>
        <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
          {todo.title}
        </h4>
        <p className="text-gray-800 mb-1 dark:text-gray-100 text-sm">
          {todo.description}
        </p>
      </div>
      <div className="flex items-center justify-between text-gray-800 dark:text-gray-100 w-full">
        <p className="text-sm">March 28, 2020</p>
        <div className="flex">
          <button
            className="w-8 h-8 rounded-full cursor-pointer bg-red-500 hover:bg-red-600 text-white flex items-center justify-center"
            onClick={() => handleDelete(todo.id)}
          >
            <MdDeleteForever className="text-lg" />
          </button>
          <button
            className="w-8 h-8 ml-2 rounded-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center"
            onClick={() => handleEdit(todo.id)}
          >
            <VscEdit />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoCards;
