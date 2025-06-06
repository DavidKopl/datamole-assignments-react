import styled from "styled-components";
import React from "react";

const StyledButton = styled.button`
    background-color: ${(props) => props.theme.colors.olive4};
    border: none;
    padding: 8px 12px;
    margin: 4px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: ${(props) => props.theme.colors.olive5};
    }

    &:disabled {
        background-color: ${(props) => props.theme.colors.olive2};
        cursor: not-allowed;
    }
`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

export const Button = ({ children, ...rest }: ButtonProps) => {
    return <StyledButton {...rest}>{children}</StyledButton>;
};
