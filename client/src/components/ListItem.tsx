import { useState } from "react";
import { Checkbox } from "./Checkbox";
import { Button } from "./Button";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { ListItemWrapper, Label, Actions } from "./styles/GlobalStyle";
import { LiteeItemProp } from "../types";

export const ListItem = (props: LiteeItemProp) => {
    const { label, isDone, onItemLabelEdit, onItemDoneToggle, onItemDelete } = props;

    const [isEditing, setIsEditing] = useState(false);
    const [editedLabel, setEditedLabel] = useState(label);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onItemLabelEdit(editedLabel);
        setIsEditing(false);
    };

    return (
        <ListItemWrapper>
            <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} />

            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <input type="text" value={editedLabel} onChange={(e) => setEditedLabel(e.target.value)} autoFocus />
                    <Button type="submit">Save</Button>
                    <Button type="button" onClick={() => setIsEditing(false)}>
                        Cancel
                    </Button>
                </form>
            ) : (
                <>
                    <Label>{label}</Label>
                    <Actions>
                        <Button onClick={() => setIsEditing(true)}>
                            <Pencil1Icon />
                        </Button>
                        <Button onClick={onItemDelete}>
                            <TrashIcon />
                        </Button>
                    </Actions>
                </>
            )}
        </ListItemWrapper>
    );
};
