import styled from "styled-components";

const InputStyled = styled.input`
    padding: 8px 12px;
    border-radius: 8px; /* zaoblené rohy */
    border: 2px solid #46a758; /* zelený rámeček */
    background-color: #e8f5e9; /* světlá zelená barva pozadí */
    color: #2e7d32; /* tmavší zelená pro text */
    font-size: 16px;
    outline: none;

    &:focus {
        border-color: #388e3c; /* tmavší zelená při focusu */
        box-shadow: 0 0 5px ##46a758;
    }
`;

type InputProps = {
    value: string;
    onValueChange: (value: string) => void;
};

export const Input = (props: InputProps) => {
    const { value, onValueChange } = props;

    return (
        <InputStyled
            value={value}
            onChange={(e) => {
                const value = e.currentTarget.value;
                onValueChange(value);
            }}
        />
    );
};
