import { useEffect, useState } from "react";
import { TodoItem } from "../types";
import { fetchTodos, addTodo, updateTodo, deleteTodo } from "../api/todos";

export function useTodos() {
    const [items, setItems] = useState<TodoItem[]>([]);
    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        fetchTodos()
            .then(setItems)
            .catch((err) => console.error("Failed to load items", err));
    }, []);

    const toggleAddForm = () => setIsAdding((v) => !v);

    const add = (label: string) => {
        addTodo(label)
            .then((createdItem) => {
                setItems((old) => [...old, createdItem]);
                setIsAdding(false);
            })
            .catch(console.error);
    };

    const update = (id: number, changes: Partial<TodoItem>) => {
        updateTodo(id, changes)
            .then((updatedItem) => {
                setItems((old) => old.map((item) => (item.id === id ? updatedItem : item)));
            })
            .catch(console.error);
    };

    const remove = (id: number) => {
        deleteTodo(id)
            .then(() => {
                setItems((old) => old.filter((item) => item.id !== id));
            })
            .catch(console.error);
    };

    return {
        items,
        setItems,
        isAdding,
        toggleAddForm,
        add,
        update,
        remove,
    };
}
