import { useEffect, useReducer } from "react";

import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = []
const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};


export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handlNewTodo = (todo) => {
        const action = {
            type: "[TODO] Add Todo",
            payload: todo,
        };
        dispatch(action);
    };

    const handleDeleteTodo = (id) => {
        dispatch({
            type: "[TODO] Remove Todo",
            payload: id,
        });
    };
    const handleonToggleTodo = (id) => {
        dispatch({
            type: "[TODO] Toogle Todo",
            payload: id,
        });
    }
    return {
        todos,
        handleDeleteTodo,
        handleonToggleTodo,
        handlNewTodo,
        todosCount: todos.length,
        PendingTodosCount: todos.filter((todo) => !todo.done).length
    }
}

