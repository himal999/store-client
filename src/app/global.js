'use client'
const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');
    body{
        padding:0;
        margin:0;
        font-family: 'PT Sans', sans-serif;
    }
`;

export default GlobalStyle;