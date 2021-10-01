import styled from "styled-components"
import Link from 'next/link';

const FooterStyles = styled.div`
    background: rgba(10, 51, 81, 1);
    color: #fff;
    padding: 2rem 5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    @media(min-width: 1000px) {
        h3 {
            transform: translateX(1rem);
        }
    }

    a:hover {
        color: rgba(0,212,255,1);
    }

    a:active {
            opacity: 0.9;
        }

    .company {
        transform: translateY(-10px);

        h1 {
            font-size: 3rem;
            margin: 0;
            color: rgba(0,212,255,1);
        }

        p {
            transform: translateX(2px);
            font-weight: 500;
            font-size: 1.5rem;
            margin: 5px 0 0 0;
        }
    }

    .sitemap {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        h2 {
            font-size: 2rem;
            margin: 0;
        }

        h3 {
            font-size: 1.15rem;
            margin: .5rem 0;
        }
    }

    @media(max-width: 1000px) {
       grid-template-columns: 1fr;
       text-align: center;
       

        .sitemap {
            flex-direction: column;

            h3 {
                margin: 0;
                font-weight: 600;
            }
        }
    }
`;

export default function Footer() {
    return (
        <FooterStyles>
            <div className='company'>
                <h1><Link href='/'>JLentz Consulting</Link></h1>
                <p>Egg Harbor City, NJ</p>
                <p>jlentzconsulting@gmail.com</p>
                <p>&copy; 2021 JLentz Consulting</p>
            </div>
            <div className='sitemap'>
                <div className='services'>
                    <h2><Link href="/services">Services:</Link></h2>
                    <h3><a href="/services#coaching">Coaching</a></h3>
                    <h3><a href="/services#finances">Finances</a></h3>
                    <h3><a href="/services#operations">Operations</a></h3>
                    <h3><a href="/services#projectmanagement">Project Management</a></h3>
                </div>
                <h2><Link href='/about'>About</Link></h2>
                <h2><Link href='/contact'>Contact</Link></h2>
            </div>  
        </FooterStyles>
    )
}