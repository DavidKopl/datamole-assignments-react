import React from "react";
import { StyledButton } from "./styles/GlobalStyle";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

export const Button = ({ children, ...rest }: ButtonProps) => {
    return <StyledButton {...rest}>{children}</StyledButton>;
};
