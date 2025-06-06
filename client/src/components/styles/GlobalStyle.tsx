import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import styled, { keyframes } from "styled-components";
import reset from "styled-reset";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    ${reset}
    
    :root {
       font-family: Inter, sans-serif;
       font-feature-settings: 'liga' 1, 'calt' 1; /* fix for Chrome */
    }

    @supports (font-variation-settings: normal) {
      :root { font-family: InterVariable, sans-serif; }
    }
`;

export const FormStyled = styled.form`
    display: flex;
`;

export const StyledButton = styled.button`
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

export const CheckboxStyled = styled(CheckboxPrimitive.Root)`
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

export const FooterStyled = styled.footer`
    display: flex;
    justify-content: space-between;

    margin-top: 15px;
    padding-top: 15px;
    font-weight: 600;

    border-top: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
`;

export const StyledDiv = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        all: unset;
        width: 25px;
        height: 25px;
        margin-left: 15px;
        align-self: center;
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

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
`;
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ListItemWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-top: 16px;

    &:hover > div.actions {
        visibility: visible;
        opacity: 1;
        animation: ${fadeIn} 0.3s ease forwards;
    }
`;

export const Label = styled.label`
    flex-grow: 1;
    margin-left: 15px;
`;

export const Actions = styled.div.attrs({ className: "actions" })`
    display: flex;
    gap: 8px;
    margin-left: auto;

    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease;
`;
