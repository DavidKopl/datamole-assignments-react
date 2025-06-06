export type Item = {
    id: number;
    label: string;
    done: boolean;
};
export type InputProps = {
    value: string;
    onValueChange: (value: string) => void;
};
export type FormProps = {
    initialValue: string;
    onSubmit: (value: string) => void;
    onCancel: () => void;
};
export type HeaderProps = {
    children: React.ReactNode;
    isAdding: boolean;
    onAddClick: () => void;
    onItemAdd: (label: string) => void;
};
export type FooterProps = {
    todoItems?: number;
    doneItems?: number;
};
export type ListProps = {
    items: TodoItem[];
    onItemsUpdate: (items: TodoItem[]) => void;
    onItemUpdate: (id: number, changes: Partial<TodoItem>) => void;
    onItemDelete: (id: number) => void;
};
export interface TodoItem extends Item {
    title: string;
    createdAt: number;
    finishedAt?: string | number;
}
export type LiteeItemProp = {
    label: string;
    isDone: boolean;
    onItemLabelEdit: (label: string) => void;
    onItemDoneToggle: (isDone: boolean) => void;
    onItemDelete: () => void;
};
