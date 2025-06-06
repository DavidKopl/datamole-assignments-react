import { PropsWithChildren } from "react";
import { olive, grass, blackA, green, gray } from "@radix-ui/colors";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";

const theme = {
    colors: {
        ...olive,
        ...grass,
        ...blackA,
        ...green,
        ...gray,
    },
};

export type ThemeType = typeof theme;
export const ThemeProvider = (props: PropsWithChildren) => {
    const { children } = props;

    return (
        <ThemeProviderStyled theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProviderStyled>
    );
};
