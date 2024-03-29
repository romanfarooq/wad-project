import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toggleAddNoteModal } from "../redux/slices/modalSlice";
import { addTodo } from "../redux/slices/todosSlice";

const AddNoteModal = () => {
  const dispatch = useDispatch();
  const [note, setNote] = useState({
    title: "",
    description: "",
  });

  const handleNote = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(note));
    dispatch(toggleAddNoteModal());
  };

  return (
    <div className="fixed inset-0 p-4 overflow-x-hidden overflow-y-auto flex justify-center items-center">
      <div className="relative w-full max-w-md">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            onClick={() => dispatch(toggleAddNoteModal())}
          >
            <IoClose className="w-5 h-5" />
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4">
              <span className="text-2xl text-gray-900 dark:text-white font-bold">
                ADD
              </span>
              <span className="text-2xl text-blue-500 font-bold"> NOTE</span>
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter title"
                  value={note.title}
                  onChange={handleNote}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows="5"
                  placeholder="Enter description"
                  value={note.description}
                  onChange={handleNote}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white resize-none"
                ></textarea>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  onClick={() => dispatch(toggleAddNoteModal())}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                >
                  Add Note
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNoteModal;
