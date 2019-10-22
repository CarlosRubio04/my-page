import styled from 'styled-components'

export const Counter = styled.div`
    position: relative;
    
    .Container {
        color: #fff;
        position: relative; 
        border-right: 2px solid rgba(255,255,255,.75);
        font-size: 40px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        transform: translateY(-60%);  
        padding-right: 3px;  
        letter-spacing: 2px;
        text-transform: uppercase;
        font-weight: 600;
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
