export type Item = {
    id: number;
    label: string;
    done: boolean;
};

export interface TodoItem extends Item {
    title: string;
    createdAt: number;
    finishedAt?: string | number;
}

export type FormProps = {
    initialValue: string;
    onSubmit: (value: string) => void;
    onCancel: () => void;
};

export type ListProps = {
    items: TodoItem[];
    onItemsUpdate: (items: TodoItem[]) => void;
    onItemUpdate: (id: number, changes: Partial<TodoItem>) => void;
    onItemDelete: (id: number) => void;
};
