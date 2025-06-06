import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import styled from "styled-components";

const CheckboxStyled = styled(CheckboxPrimitive.Root)`
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 6px;
    border: 2px solid ${(props) => props.theme.colors.gray6};
    transition:
        background-color 0.2s,
        border-color 0.2s,
        box-shadow 0.2s;

    &:hover {
        background-color: ${(props) => props.theme.colors.green3};
        border-color: ${(props) => props.theme.colors.green7};
    }

    &[data-state="checked"] {
        background-color: ${(props) => props.theme.colors.green9};
        border-color: ${(props) => props.theme.colors.green9};
        color: white;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors.green7};
    }
`;

export const CheckboxIndicator = styled(CheckboxPrimitive.Indicator)`
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Checkbox = (props: CheckboxProps) => (
    <CheckboxStyled {...props}>
        <CheckboxIndicator>
            <CheckIcon />
        </CheckboxIndicator>
    </CheckboxStyled>
);
