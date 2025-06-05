import React, { useEffect, useState } from "react";
import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";

type TodoItem = {
    id: number;
    label: string;
    isDone: boolean;
    createdAt: number;
};

export const App = () => {
    const [items, setItems] = useState<TodoItem[]>([]); // <-- explicitly typed

    useEffect(() => {
        fetch("http://localhost:3000/items")
            .then((res) => res.json())
            .then((data: TodoItem[]) => setItems(data)) // type cast here too
            .catch((err) => console.error("Failed to load items", err));
    }, []);

    const todoCount = items.filter((item) => !item.isDone).length;
    const doneCount = items.filter((item) => item.isDone).length;

    return (
        <ThemeProvider>
            <Container>
                <Layout>
                    <Header onItemAdd={() => console.warn("unimplemented")}>To Do app</Header>
                    <List items={items} />
                    <Footer todoItems={todoCount} doneItems={doneCount} />
                </Layout>
            </Container>
        </ThemeProvider>
    );
};
