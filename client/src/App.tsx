import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { useTodos } from "./hooks/useTodos";

export const App = () => {
    const { items, setItems, isAdding, toggleAddForm, add, update, remove } = useTodos();
    const todoCount = items.filter((item) => !item.done).length;
    const doneCount = items.filter((item) => item.done).length;

    return (
        <ThemeProvider>
            <Container>
                <Layout>
                    <Header isAdding={isAdding} onAddClick={toggleAddForm} onItemAdd={add}>
                        {todoCount === 0 && doneCount === 0 && "Write your first todo:"}
                        {todoCount === 0 && doneCount > 0 && "All done! Add more if you like:"}
                        {todoCount > 0 && "Keep going, you’ve got this!"}
                    </Header>
                    <List items={items} onItemsUpdate={setItems} onItemUpdate={update} onItemDelete={remove} />
                    <Footer todoItems={todoCount} doneItems={doneCount} />
                </Layout>
            </Container>
        </ThemeProvider>
    );
};
