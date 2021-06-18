import styled from "styled-components";
import Link from 'next/link'

const NavStyles = styled.div`
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        background-color: rgba(255, 252, 242, 0.25);

        position: relative;
        height: 15vh;

        img {
            padding-left: 1rem;
            width: 800px;
        }

        img:hover {
            cursor: pointer;
        }

        ul {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 2.5rem;
        }

        ul li a {
            color: rgb(10, 51, 81);
            padding: .65rem;
            font-size: 2.25rem;
        }

        ul li a:hover {
            color: rgba(10, 51, 81, 0.5);
        }      
    `;

export default function Nav() {
    return (
        <NavStyles>
            <Link href="/">
                <img src="/JLentzConsultingLogo2.svg" alt="JLentz Consulting" />
            </Link>
            <ul>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </NavStyles>
    )
}
