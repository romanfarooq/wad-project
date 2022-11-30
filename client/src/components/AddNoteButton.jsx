import { BiMessageSquareAdd } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toggleAddNoteModal } from "../redux/slices/modalSlice";

function AddNoteButton() {
  const dispatch = useDispatch();
  return (
    <button
      className="fixed bottom-0 right-0 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-16 h-16 mx-10 my-5 flex items-center justify-center shadow-lg"
      onClick={() => dispatch(toggleAddNoteModal())}
    >
      <BiMessageSquareAdd className="text-4xl" />
    </button>
  );
}

export default AddNoteButton;
