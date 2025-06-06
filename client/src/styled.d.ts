// src/styled.d.ts
import "styled-components";
import { olive, grass, blackA, green, gray } from "@radix-ui/colors";

type Color = typeof olive & typeof grass & typeof blackA & typeof green & typeof gray;

declare module "styled-components" {
    export interface DefaultTheme {
        colors: Color;
    }
}
