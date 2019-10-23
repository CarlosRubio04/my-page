import styled from 'styled-components'

export const MainFooter = styled.footer`
    position: relative;
    background-color: #000;

    .Container {
        position: relative;
        padding: 10px 20px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;

        .Medium {
            position: relative;

            a {
                text-decoration: none;
                display: flex;
                justify-content: flex-start;
                align-items: flex-end;

                span {
                    color: #e5e5e5;
                    font-size: 12px;
                    margin-bottom: 5px;
                }
            }
        }

        .Social {
            position: relative;

            ul {
                list-style: none;
                padding: 0px !important;
                display: flex;
                justify-content: flex-end;

                li {
                    margin: 0 10px;

                    a {
                        text-decoration: none;

                        img {
                            width: 18px;
                            height: auto;
                        }
                    }
                }
            }
        }
    }
`
