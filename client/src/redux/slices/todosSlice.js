import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      {
        id: 1,
        title: "13 things to work on",
        description:
          "Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt, neque porro quisquam est, quid malum, sensu iudicari",
        completed: false,
      },
      {
        id: 2,
        title: "13 things to work on",
        description:
          "Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt, neque porro quisquam est, quid malum, sensu iudicari",
        completed: false,
      },
      {
        id: 3,
        title: "13 things to work on",
        description:
          "Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt, neque porro quisquam est, quid malum, sensu iudicari",
        completed: false,
      },
      {
        id: 4,
        title: "13 things to work on",
        description:
          "Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt, neque porro quisquam est, quid malum, sensu iudicari",
        completed: false,
      },
      {
        id: 5,
        title: "13 things to work on",
        description:
          "Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt, neque porro quisquam est, quid malum, sensu iudicari",
        completed: false,
      },
      {
        id: 6,
        title: "13 things to work on",
        description:
          "Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt, neque porro quisquam est, quid malum, sensu iudicari",
        completed: false,
      },
      {
        id: 7,
        title: "13 things to work on",
        description:
          "Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt, neque porro quisquam est, quid malum, sensu iudicari",
        completed: false,
      },
      {
        id: 8,
        title: "13 things to work on",
        description:
          "Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt, neque porro quisquam est, quid malum, sensu iudicari",
        completed: false,
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
          todo.description = action.payload.description;
          todo.completed = action.payload.completed;
        }
        return todo;
      });
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, updateTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
