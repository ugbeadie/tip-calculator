import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap');

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Space Mono", monospace;
        background-color: ${({ theme }) => theme.colors.body};
    }

    input {
        direction: rtl;
    }

    input:focus {
        border: 1px solid red
        outline: red
    }

    input::-webkit-inner-spin-button,
        .no-spin::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
        margin: 0 !important;
    }  
    
    h3 {
        color: hsl(186, 14%, 43%);
    }
`;

export default GlobalStyles