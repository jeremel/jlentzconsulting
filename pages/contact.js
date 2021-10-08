import Head from 'next/head';
import styled from 'styled-components'

const ContactStyles = styled.div`
    /* background: rgba(10, 51, 81, 1);
    background: linear-gradient(120deg, rgba(16,70,110,1) 0%, rgba(0,212,255,1) 100%); */
    padding: 2.5rem 0;
    text-align: center;
    font-family: 'Libre Baskerville', serif;
    font-weight: 700;
    color: rgb(10,51,81);

    h1 {
        margin: 0;
        font-size: 2.5rem;        
    }   

    h2 {
        margin: 0;
        font-size: 2rem;
    }

    @media(max-width: 1000px) {
        padding: 2rem;

        h1 {
            font-size: 2rem;
        }

        h2 {
            font-size: 1.5rem;
        }
    }
`;

export default function contact() {
    return (
        <ContactStyles>
            <Head>
                <title>JLentz Consulting|Contact</title>
                <meta name="JLentz Consulting" content="JLentz Consulting" />
                <link rel="icon" href="/JL_Logo.png" />
            </Head>
            <h1>Reach out today to get a free consultation</h1>
            <h2>Email us at jlentzconsulting@gmail.com</h2>
            <h2>or fill out the form below!</h2>
        </ContactStyles>
        )
}
