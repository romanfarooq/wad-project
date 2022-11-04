import { GiAlarmClock } from 'react-icons/gi';
import { VscEdit } from 'react-icons/vsc';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../redux/slices/modalSlice';

const TodoCards = (props) => {
  const { todo, setId } = props;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    setId(id);
    dispatch(toggleModal());
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
      <div className="w-full flex flex-col items-start">
        <div className="my-2 border border-gray-800 rounded-full px-3 py-1 text-gray-800 dark:text-gray-400 dark:border-gray-700 text-xs flex items-center">
          <GiAlarmClock className="text-base" />
          <p className="ml-2">7 Sept, 23:00</p>
        </div>
        <div className="flex items-center justify-between text-gray-800 dark:text-gray-100 w-full">
          <p className="text-sm">March 28, 2020</p>
          <div className="flex">
            <div
              className="w-8 h-8 rounded-full cursor-pointer bg-red-500 hover:bg-red-600 text-white flex items-center justify-center"
              onClick={() => handleDelete(todo.id)}
            >
              <MdDeleteForever className="text-lg" />
            </div>
            <div className="w-8 h-8 ml-2 rounded-full cursor-pointer bg-green-500 hover:bg-green-600 text-white flex items-center justify-center">
              <VscEdit />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCards;