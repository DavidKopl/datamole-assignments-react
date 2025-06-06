import { TodoItem } from "../types";

const API_URL = "http://localhost:3000/items";

export const fetchTodos = async (): Promise<TodoItem[]> => {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch todos");
    return res.json();
};

export const addTodo = async (label: string): Promise<TodoItem> => {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ label, done: false }),
    });
    if (!res.ok) throw new Error("Failed to add todo");
    return res.json();
};

export const updateTodo = async (id: number, changes: Partial<TodoItem>): Promise<TodoItem> => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(changes),
    });
    if (!res.ok) throw new Error("Failed to update todo");
    return res.json();
};

export const deleteTodo = async (id: number): Promise<void> => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete todo");
};
