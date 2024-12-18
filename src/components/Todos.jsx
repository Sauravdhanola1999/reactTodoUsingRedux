import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../features/toDo/toDoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [newText, setNewText] = useState("");

  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setNewText(todo.text);
  };

  const handleSave = (id) => {
    dispatch(editTodo({ id, newText }));
    setEditingId(null);
    setNewText("");
  };

  const handleCancel = () => {
    setEditingId(null);
    setNewText("");
  };

  return (
    <>
      <div className="px-5">
        <ul className="list-none">
          {todos.map((todo) => (
            <li
              className="mt-4 flex justify-between items-center text-lg font-serif bg-zinc-800 px-4 py-2 rounded"
              key={todo.id}
            >
              <div className="text-white">
                {editingId === todo.id ? (
                  <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    className="text-black px-2 py-1 rounded text-lg font-serif"
                  />
                ) : (
                  todo.text
                )}
              </div>
              <div className="flex space-x-4">
                {editingId === todo.id ? (
                  <>
                    <button
                      onClick={() => handleSave(todo.id)}
                      className="text-white font-bold text-lg font-serif bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="text-white font-bold text-lg font-serif bg-gray-500 border-0 py-1 px-4 focus:outline-none hover:bg-gray-600 rounded text-md"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEdit(todo)}
                      className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l2.651 2.652m-2.651-2.652a1.875 1.875 0 112.652 2.652L7.276 19.68a4.5 4.5 0 01-1.696 1.1l-3.06 1.02 1.02-3.06a4.5 4.5 0 011.1-1.696L16.862 4.487zm0 0L19.514 7.14"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => dispatch(removeTodo(todo.id))}
                      className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todos;
