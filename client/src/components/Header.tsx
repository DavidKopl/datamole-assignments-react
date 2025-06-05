import { PlusIcon } from "@radix-ui/react-icons";
import React from "react";
import styled from "styled-components";
import { Form } from "./Form";

const StyledDiv = styled.header`
    display: flex;
    align-items: center;
    gap: 10px;

    button {
        all: unset;
        width: 25px;
        height: 25px;
        background-color: ${(props) => props.theme.colors.grass9};
        border: 1px solid;
        border-color: ${(props) => props.theme.colors.olive9};
        border-radius: 50%;
        color: #fff;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

type HeaderProps = {
    children: React.ReactNode;
    isAdding: boolean;
    onAddClick: () => void;
    onItemAdd: (label: string) => void;
};

export const Header = (props: HeaderProps) => {
    const { children, isAdding, onAddClick, onItemAdd } = props;

    return (
        <StyledDiv>
            <h1>{children}</h1>

            {isAdding ? (
                <Form initialValue="" onSubmit={(value) => onItemAdd(value)} onCancel={onAddClick} />
            ) : (
                <button onClick={onAddClick} aria-label="Přidat úkol">
                    <PlusIcon />
                </button>
            )}
        </StyledDiv>
    );
};
