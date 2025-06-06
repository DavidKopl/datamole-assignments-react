import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import { FormStyled } from "../styles/GlobalStyle";
import { Button } from "../Button";
import { Input } from "./Input";
import { FormProps } from "../../types";

export const Form = (props: FormProps) => {
    const { initialValue, onSubmit, onCancel } = props;

    const [inputValue, setInputValue] = useState(initialValue);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim() === "") {
            alert("Don't be stupid and enter a todo before submitting.🤓");
            return;
        }
        onSubmit(inputValue.trim());
        setInputValue("");
    };

    return (
        <FormStyled onSubmit={handleSubmit} onReset={() => onCancel()}>
            <Input value={inputValue} onValueChange={(value) => setInputValue(value)} />
            <Button type="submit">
                <CheckIcon />
            </Button>
            <Button type="reset">
                <Cross1Icon />
            </Button>
        </FormStyled>
    );
};
