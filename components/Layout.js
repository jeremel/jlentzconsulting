import styled from "styled-components";
import Contact from "./Contact";
import Footer from "./Footer";
import Nav from "./Nav";

const LayoutStyles = styled.div`
        height: 100vh;
        width: 100%;
        margin: 0;
        padding: 0;
        background-color: #fff;
    `;

export default function Layout({ children }) {
    return (
        <LayoutStyles>
            <Nav />
            {children}
            <Contact />
            <Footer />
        </LayoutStyles>
    )
}
