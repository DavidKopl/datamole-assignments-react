import React, { useEffect, useState } from "react";
import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { Form } from "./components/Form";

type TodoItem = {
    id: number;
    label: string;
    isDone: boolean;
    createdAt: number;
};

export const App = () => {
    const [items, setItems] = useState<TodoItem[]>([]);
    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3000/items")
            .then((res) => res.json())
            .then((data: TodoItem[]) => setItems(data))
            .catch((err) => console.error("Failed to load items", err));
    }, []);

    const todoCount = items.filter((item) => !item.isDone).length;
    const doneCount = items.filter((item) => item.isDone).length;

    // Přepnutí režimu přidávání
    const toggleAddForm = () => setIsAdding((v) => !v);

    const addTodo = (label: string) => {
        const newItem = {
            label,
            isDone: false,
        };

        fetch("http://localhost:3000/items", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newItem),
        })
            .then((res) => res.json())
            .then((createdItem: TodoItem) => {
                setItems((oldItems) => [...oldItems, createdItem]);
                setIsAdding(false);
            })
            .catch((err) => {
                console.error("Chyba při přidávání:", err);
            });
    };

    return (
        <ThemeProvider>
            <Container>
                <Layout>
                    <Header isAdding={isAdding} onAddClick={toggleAddForm} onItemAdd={addTodo}>
                        To Do app
                    </Header>

                    <List items={items} />
                    <Footer todoItems={todoCount} doneItems={doneCount} />
                </Layout>
            </Container>
        </ThemeProvider>
    );
};
