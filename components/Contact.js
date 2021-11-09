import styled from "styled-components"
import ContactForm from "./ContactForm";

const ContactStyles = styled.div`
    background: rgb(16,70,110);
    background: linear-gradient(120deg, rgba(0,212,255,1) 0%, rgba(16,70,110,1) 100%);
    color: #fff;
    padding: 3rem 5rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    .contactText {
        text-align: center;
        max-width: 800px;
        
        h1 {
            font-size: 3.5rem;
            color: rgba(10, 51, 81, 1);
            margin: 0;
            font-weight: 700;
        }

        h2 {
            font-size: 1.75rem;
            font-family: 'Libre Baskerville', serif;
            text-align: center;
            margin: 1.25rem 0;
        }

        @media(max-width: 1000px) {
            h1 {
                font-size: 2.5rem;
            }

            h2 {
                font-size: 1.25rem;
            }
        }
    }
`;

export default function Contact() {
    return (
        <ContactStyles id="contact">
            <div className="contactText">
                <h1>Reach Out Today!</h1>
                <h2>Fill out the form below and leave us a brief message explaining what you need assistance with and we will get back to you as soon as possible!</h2>
            </div>
            <ContactForm />
        </ContactStyles>
    )
}