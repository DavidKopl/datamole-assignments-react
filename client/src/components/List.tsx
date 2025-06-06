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
    items: TodoItem[];
    onItemsUpdate: (items: TodoItem[]) => void; // možná nebudeš používat, ale může být
    onItemUpdate: (id: number, changes: Partial<TodoItem>) => void;
    onItemDelete: (id: number) => void;
};

export const List = ({ items, onItemUpdate, onItemDelete }: ListProps) => {
    const sortedItems = [...items].sort((a, b) => {
        if (a.isDone !== b.isDone) return a.isDone ? 1 : -1;
        return b.createdAt - a.createdAt;
    });

    return (
        <ListStyled>
            {sortedItems.map((item) => (
                <ListItem
                    key={item.id}
                    label={item.label}
                    isDone={item.isDone}
                    onItemLabelEdit={(newLabel) => onItemUpdate(item.id, { label: newLabel })}
                    onItemDoneToggle={(checked) => onItemUpdate(item.id, { isDone: checked })}
                    onItemDelete={() => onItemDelete(item.id)}
                />
            ))}
        </ListStyled>
    );
};
