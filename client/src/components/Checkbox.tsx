import { CheckboxProps } from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { CheckboxStyled, CheckboxIndicator } from "./styles/GlobalStyle";

export const Checkbox = (props: CheckboxProps) => (
    <CheckboxStyled {...props}>
        <CheckboxIndicator>
            <CheckIcon />
        </CheckboxIndicator>
    </CheckboxStyled>
);
