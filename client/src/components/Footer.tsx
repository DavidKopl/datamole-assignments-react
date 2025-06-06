import { FooterStyled } from "./styles/GlobalStyle";
import { FooterProps } from "../types";

export const Footer = (props: FooterProps) => {
    const { todoItems = 0, doneItems = 0 } = props;

    return (
        <FooterStyled>
            <div>Todo: {todoItems}</div>
            <div>Done: {doneItems}</div>
        </FooterStyled>
    );
};
