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

        img {
            padding-left: 1rem;
            padding-bottom: 1rem;
            width: 500px;
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
            font-size: 1.75rem;
            font-weight: 500;
        }

        ul li a:hover {
            color: rgba(0,212,255,1);
            text-decoration: underline;
        }
        
        ul li a:active {
            color: rgb(0,212,255);
            text-decoration: none;
        }

        @media (max-width: 1000px) {
            justify-content: center;
            align-items: center;

            img {
                padding: 1rem 0;
                margin: 0;
            }

            ul {
                padding: 0;
                margin: 0 0 1.5rem 0;
            }
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
