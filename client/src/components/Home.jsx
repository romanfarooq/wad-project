import { useState } from "react";
import { useSelector } from "react-redux";
import TodoCards from "./TodoCards";
import ConfirmModal from "./ConfirmModal";
import NoteModal from "./NoteModal";

function Home() {
  const [id, setId] = useState("");
  const { todos } = useSelector((state) => state.todos);
  const { confirmModal, noteModal } = useSelector((state) => state.modal);
  return (
    <>
      <h1 className="text-center pb-12">
        <span className="text-4xl dark:text-white font-bold">TODO </span>
        <span className="text-4xl text-blue-500 font-bold">NOTES</span>
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {todos.map((todo) => (
          <TodoCards key={todo.id} todo={todo} setId={setId} />
        ))}
      </div>
      {confirmModal && <ConfirmModal id={id} setId={setId} />}
      {noteModal && <NoteModal />}
    </>
  );
}

export default Home;
