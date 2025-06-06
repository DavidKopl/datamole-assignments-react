import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Checkbox } from "./Checkbox";
import { Button } from "./Button";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ListItemWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 8px;

    &:hover > div.actions {
        visibility: visible;
        opacity: 1;
        animation: ${fadeIn} 0.3s ease forwards;
    }
`;

const Label = styled.label`
    flex-grow: 1;
    margin-left: 15px;
`;

const Actions = styled.div.attrs({ className: "actions" })`
    display: flex;
    gap: 8px;
    margin-left: auto;

    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease;
`;
export type LiteeItemProp = {
    label: string;
    isDone: boolean;
    onItemLabelEdit: (label: string) => void;
    onItemDoneToggle: (isDone: boolean) => void;
    onItemDelete: () => void;
};
export const ListItem = (props: LiteeItemProp) => {
    const { label, isDone, onItemLabelEdit, onItemDoneToggle, onItemDelete } = props;

    const [isEditing, setIsEditing] = useState(false);
    const [editedLabel, setEditedLabel] = useState(label);

    const handleSubmit = (e) => {
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
