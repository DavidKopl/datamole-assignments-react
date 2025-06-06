// src/styled.d.ts
import "styled-components";
import { olive, grass, blackA } from "@radix-ui/colors";

type Color = typeof olive & typeof grass & typeof blackA;

declare module "styled-components" {
    export interface DefaultTheme {
        colors: Color;
    }
}
