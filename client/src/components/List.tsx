import styled from "styled-components";
import { ListItem } from "./ListItem";
import { TodoItem, Item, ListProps } from "../types";

const ListStyled = styled.div`
    display: flex;
    flex-direction: column;
`;

export const List = ({ items, onItemsUpdate }: ListProps) => {
    const updateItem = async (id: number, changes: Partial<Item>) => {
        let updatedItem;

        // Pokud je změna na "done: true", použij nový endpoint
        if ("isDone" in changes && changes.isDone === true) {
            const res = await fetch(`http://localhost:3000/items/${id}/markDone`, {
                method: "POST",
            });
            updatedItem = await res.json();
        } else {
            // Jinak PATCH
            const res = await fetch(`http://localhost:3000/items/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(changes),
            });
            updatedItem = await res.json();
        }

        const newItems = items.map((item) => (item.id === id ? updatedItem : item));
        onItemsUpdate(newItems);
    };

    const deleteItem = async (id: number) => {
        await fetch(`http://localhost:3000/items/${id}`, { method: "DELETE" });
        onItemsUpdate(items.filter((item) => item.id !== id));
    };

    const sortedItems = [...items].sort((a, b) => {
        if (a.done !== b.done) return a.done ? 1 : -1;
        return b.createdAt - a.createdAt;
    });

    return (
        <ListStyled>
            {sortedItems.map((item) => (
                <ListItem
                    key={item.id}
                    label={item.label}
                    isDone={item.done}
                    onItemLabelEdit={(newLabel) => updateItem(item.id, { label: newLabel })}
                    onItemDoneToggle={(checked) => updateItem(item.id, { done: checked })}
                    onItemDelete={() => deleteItem(item.id)}
                />
            ))}
        </ListStyled>
    );
};
