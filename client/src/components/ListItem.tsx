import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox } from "./Checkbox";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
`;

const Label = styled.label`
    margin-left: 15px;
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onItemLabelEdit(editedLabel);
        setIsEditing(false);
    };

    return (
        <StyledDiv>
            <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} />

            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <input type="text" value={editedLabel} onChange={(e) => setEditedLabel(e.target.value)} />
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => setIsEditing(false)}>
                        Cancel
                    </button>
                </form>
            ) : (
                <>
                    <Label>{label}</Label>
                    <button onClick={() => setIsEditing(true)}>
                        <Pencil1Icon />
                    </button>
                    <button onClick={onItemDelete}>
                        <TrashIcon />
                    </button>
                </>
            )}
        </StyledDiv>
    );
};
