import React, { useEffect, useState } from "react";
import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { TodoItem } from "./types";
import { fetchTodos, addTodo, updateTodo, deleteTodo } from "./api/todos";

export const App = () => {
    const [items, setItems] = useState<TodoItem[]>([]);
    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        fetchTodos()
            .then(setItems)
            .catch((err) => console.error("Failed to load items", err));
    }, []);

    const todoCount = items.filter((item) => !item.done).length;
    const doneCount = items.filter((item) => item.done).length;
    const toggleAddForm = () => setIsAdding((v) => !v);
    const handleAddTodo = (label: string) => {
        addTodo(label)
            .then((createdItem) => {
                setItems((old) => [...old, createdItem]);
                setIsAdding(false);
            })
            .catch(console.error);
    };

    const handleUpdateItem = (id: number, changes: Partial<TodoItem>) => {
        updateTodo(id, changes)
            .then((updatedItem) => {
                setItems((old) => old.map((item) => (item.id === id ? updatedItem : item)));
            })
            .catch(console.error);
    };

    const handleDeleteItem = (id: number) => {
        deleteTodo(id)
            .then(() => {
                setItems((old) => old.filter((item) => item.id !== id));
            })
            .catch(console.error);
    };

    return (
        <ThemeProvider>
            <Container>
                <Layout>
                    <Header isAdding={isAdding} onAddClick={toggleAddForm} onItemAdd={handleAddTodo}>
                        {todoCount === 0 && doneCount === 0 && "Write your first todo:"}
                        {todoCount === 0 && doneCount > 0 && "All done! Add more if you like:"}
                        {todoCount > 0 && "Keep going, you’ve got this!"}
                    </Header>
                    <List
                        items={items}
                        onItemsUpdate={setItems}
                        onItemUpdate={handleUpdateItem}
                        onItemDelete={handleDeleteItem}
                    />
                    <Footer todoItems={todoCount} doneItems={doneCount} />
                </Layout>
            </Container>
        </ThemeProvider>
    );
};
