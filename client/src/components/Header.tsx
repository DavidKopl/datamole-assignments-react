import { PlusIcon } from "@radix-ui/react-icons";
import { Form } from "./form/Form";
import { Button } from "./Button";
import { StyledDiv, Title } from "./styles/GlobalStyle";
import { HeaderProps } from "../types";

export const Header = (props: HeaderProps) => {
    const { children, isAdding, onAddClick, onItemAdd } = props;
    return (
        <StyledDiv>
            <Title>{children}</Title>

            {isAdding ? (
                <Form initialValue="" onSubmit={(value) => onItemAdd(value)} onCancel={onAddClick} />
            ) : (
                <Button onClick={onAddClick} aria-label="Add task">
                    <PlusIcon />
                </Button>
            )}
        </StyledDiv>
    );
};
