import styled from "styled-components";
import Nav from "./Nav";

const LayoutStyles = styled.div`
        height: 100vh;
        width: 100%;
        background-color: #fff;

        footer p {
            text-align: center;
            font-weight: 700;
            margin: 0;
            padding: 3rem 0 1.5rem;
        }
    `;

export default function Layout({ children }) {
    return (
        <LayoutStyles>
            <Nav />
            {children}
            <footer>
                <p>Copyright 2021 JLentz Consulting</p>
            </footer>
        </LayoutStyles>
    )
}
