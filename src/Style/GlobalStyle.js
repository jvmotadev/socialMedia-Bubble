import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

//classes para a fonte Poppins
.font-1-xs {
    font: 500 0.75rem/1 "Poppins", sans-serif;
}
.font-1-s {
    font: 500 1.125rem/1.5 "Poppins", sans-serif;
}
.font-1-m-b {
    font: 600 1.125rem/1.5 "Poppins", sans-serif;
}
.font-1-m {
    font: 400 1.125rem/1.5 "Poppins", sans-serif;
}
.font-1-l {
    font: 500 1.5rem/2.25 "Poppins", sans-serif;
}
.font-1-xl {
    font: 600 2rem/2.5 "Poppins", sans-serif;
}
.font-1-xxl {
    font: 600 2.75rem/3.875 "Poppins", sans-serif;
}
.font-1-xxxl {
    font: 600 4rem/4.5 "Poppins", sans-serif;
}
.font-1-xxxxl {
    font: 800 4.75rem/5.75 "Poppins", sans-serif;
}

//classes para a fonte Roboto
.font-2-xxs {
    font: 400 0.625rem/0.75 "Roboto", sans-serif;
}
.font-2-xs {
    font: 400 0.875rem/1.25 "Roboto", sans-serif;
}
.font-2-s {
    font: 400 1rem/1.5 "Roboto", sans-serif;
}
.font-2-m {
    font: 500 1.125rem/1.5 "Roboto", sans-serif;
}
.font-2-l-b {
    font: 500 1.5rem/2.25 1.5% "Roboto", sans-serif;
}
.font-2-l {
    font: 400 1.5rem/2.25 "Roboto", sans-serif;
}
.font-2-xl {
    font: 400 1.5rem/2.25 "Roboto", sans-serif;
}


`