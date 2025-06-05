import styled from "styled-components";

const ListStyled = styled.div`
    display: flex;
    flex-direction: column;
`;

type ListProps = {
    items: {
        id: number;
        label: string;
        isDone: boolean;
    }[];
};

export const List = ({ items }: ListProps) => {
    return (
        <ListStyled>
            {items.map((item) => (
                <div key={item.id}>
                    <input type="checkbox" checked={item.isDone} readOnly />
                    {item.label}
                </div>
            ))}
        </ListStyled>
    );
};
