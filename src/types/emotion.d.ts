import '@emotion/react';
import { Palette, TextStyle } from './theme.types';

declare module '@emotion/react' {
  export interface Theme {
    palette: Palette;
    textStyle: TextStyle;
  }
}
