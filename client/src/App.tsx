import React, { useEffect, useState } from "react";
import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { TodoItem } from "./types";

export const App = () => {
    const [items, setItems] = useState<TodoItem[]>([]);
    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3000/items")
            .then((res) => res.json())
            .then((data: TodoItem[]) => setItems(data))
            .catch((err) => console.error("Failed to load items", err));
    }, []);

    const todoCount = items.filter((item) => !item.done).length;
    const doneCount = items.filter((item) => item.done).length;

    const toggleAddForm = () => setIsAdding((v) => !v);

    const addTodo = (label: string) => {
        const newItem = { label, done: false };
        fetch("http://localhost:3000/items", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newItem),
        })
            .then((res) => res.json())
            .then((createdItem: TodoItem) => {
                setItems((old) => [...old, createdItem]);
                setIsAdding(false);
            })
            .catch(console.error);
    };

    const updateItem = async (id: number, changes: Partial<TodoItem>) => {
        try {
            const res = await fetch(`http://localhost:3000/items/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(changes),
            });
            const updatedItem = await res.json();
            setItems((old) => old.map((item) => (item.id === id ? updatedItem : item)));
        } catch (e) {
            console.error("Update failed", e);
        }
    };

    const deleteItem = async (id: number) => {
        try {
            await fetch(`http://localhost:3000/items/${id}`, {
                method: "DELETE",
            });
            setItems((old) => old.filter((item) => item.id !== id));
        } catch (e) {
            console.error("Delete failed", e);
        }
    };

    return (
        <ThemeProvider>
            <Container>
                <Layout>
                    <Header isAdding={isAdding} onAddClick={toggleAddForm} onItemAdd={addTodo}>
                        {todoCount === 0 && doneCount === 0 && "Write your first todo:"}
                        {todoCount === 0 && doneCount > 0 && "All done! Add more if you like:"}
                        {todoCount > 0 && "Keep going, you’ve got this!"}
                    </Header>
                    <List items={items} onItemsUpdate={setItems} onItemUpdate={updateItem} onItemDelete={deleteItem} />
                    <Footer todoItems={todoCount} doneItems={doneCount} />
                </Layout>
            </Container>
        </ThemeProvider>
    );
};
