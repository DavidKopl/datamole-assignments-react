import styled from "styled-components";
import { ListItem } from "./ListItem";

const ListStyled = styled.div`
    display: flex;
    flex-direction: column;
`;

type Item = {
    id: number;
    label: string;
    isDone: boolean;
};

type ListProps = {
    items: Item[];
    onItemsUpdate: (updated: Item[]) => void;
};
export const List = ({ items, onItemsUpdate }: ListProps) => {
    const updateItem = async (id: number, changes: Partial<Item>) => {
        const res = await fetch(`http://localhost:3000/items/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(changes),
        });
        const updatedItem = await res.json();
        const newItems = items.map((item) => (item.id === id ? updatedItem : item));
        onItemsUpdate(newItems);
    };

    const sortedItems = [...items].sort((a, b) => {
        // 1. Nedokončené nahoru
        if (a.isDone !== b.isDone) {
            return a.isDone ? 1 : -1;
        }
        // 2. Nejnovější první
        return b.createdAt - a.createdAt;
    });

    return (
        <ListStyled>
            {sortedItems.map((item) => (
                <ListItem
                    key={item.id}
                    label={item.label}
                    isDone={item.isDone}
                    onItemLabelEdit={(newLabel) => updateItem(item.id, { label: newLabel })}
                    onItemDoneToggle={(checked) => updateItem(item.id, { isDone: checked })}
                    onItemDelete={() => deleteItem(item.id)}
                />
            ))}
        </ListStyled>
    );
};
