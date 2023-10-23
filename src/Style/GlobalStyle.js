import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

	//classes para a fonte Poppins
	.font-1-xs {
			font: 500 0.75rem "Poppins", sans-serif;
	}
	.font-1-s {
			font: 500 1.125rem "Poppins", sans-serif;
	}
	.font-1-m-b {
			font: 600 1.125rem "Poppins", sans-serif;
	}
	.font-1-m {
			font: 400 1.125rem "Poppins", sans-serif;
	}
	.font-1-l {
			font: 500 1.5rem "Poppins", sans-serif;
	}
	.font-1-xl {
			font: 600 2rem "Poppins", sans-serif;
	}
	.font-1-xxl {
			font: 600 2.75rem "Poppins", sans-serif;
	}
	.font-1-xxxl {
			font: 600 4rem "Poppins", sans-serif;
	}
	.font-1-xxxxl {
			font: 800 4.75rem "Poppins", sans-serif;
	}

	//classes para a fonte Roboto
	.font-2-xxs {
			font: 400 0.625rem "Roboto", sans-serif;
	}
	.font-2-xs {
			font: 400 0.875rem "Roboto", sans-serif;
	}
	.font-2-s {
			font: 400 1rem "Roboto", sans-serif;
	}
	.font-2-m {
			font: 500 1.125rem "Roboto", sans-serif;
	}
	.font-2-l-b {
			font: 500 1.5rem"Roboto", sans-serif;
	}
	.font-2-l {
			font: 400 1.5rem"Roboto", sans-serif;
	}
	.font-2-xl {
			font: 400 1.5rem"Roboto", sans-serif;
	}

`