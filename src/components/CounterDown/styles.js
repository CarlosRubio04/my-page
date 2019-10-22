import styled from 'styled-components'

export const Counter = styled.div`
    background-color: #000;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
    height: 100vh;
    width: 100%;
    left: 0;
    top: 0;

    .Container {
        color: #fff;
        position: relative; 
        font-size: 22px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;  
        padding-right: 3px;  
        letter-spacing: 2px;
        transform: translateY(-60%);
        font-family: 'Roboto Slab', serif;
        border-right: 2px solid rgba(255,255,255,.75);
    }

    /* Animation */
    .anim-typewriter{
        animation: typewriter 4s steps(14) 1s 1 normal both,
                blinkTextCursor 550ms steps(8) infinite normal;
    }
    @keyframes typewriter{
        from{width: auto;}
        to{width: auto;}
    }
    @keyframes blinkTextCursor{
        from{border-right-color: rgba(255,255,255,.75);}
        to{border-right-color: transparent;}
    }
`
