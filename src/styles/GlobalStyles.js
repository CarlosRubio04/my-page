import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    body {
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        color: #3c4245;
    }
    input, select {
        display: block;
        width: 100%;
        height: calc(1.5em + .75rem + 2px);
        padding: .375rem .75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    img {
        max-width: 100%;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    .Home {
        position: relative;
        background-color: #fff;

        &_Container {
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;

            h1 {
                font-weight: 300;
                font-size: 48px;
                opacity: .5;
                transition: all .5s ease-in-out;
                animation: fadeIn 1s ease-in-out .5s forwards;
                text-align: center;
            }
        }
    }

    .Main-Button {
        cursor: pointer;
        position: relative;
        display: block;
        background-color: rgb(13, 175, 185);
        color: rgb(255, 255, 255);
        padding: 8px 24px;
        border-radius: 4px;
        font-size: 22px;
        width: 100%;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 300;
    }

    @keyframes fadeIn {
        from{opacity: .5;}
        to{opacity: 1;}
    }
`
