import styled from "styled-components";

const AboutStyles = styled.div`
    header {
        background: rgba(10, 51, 81, 1);
        background: linear-gradient(120deg, rgba(16,70,110,1) 0%, rgba(0,212,255,1) 100%);
        padding: 3rem 0;

        h1 {
            margin: 0;
            color: #fff;
            font-size: 3rem;
            text-align: center;
            font-family: 'Libre Baskerville', serif;
            font-weight: 700;
        }       
    }

    section {
        margin: 0 12rem;
        padding: 1rem 0;

        img {
            border-radius: 50%;
            /* border: 4px solid blue; */
            float: left;
            shape-outside: 50%;
        }

        p {
            font-size: 1.5rem;
            font-weight: 500;
            margin: 1rem 0;
            text-indent: 2rem;
            color: rgb(10, 51, 81);
        }

        hr {
            width: 75%;
            opacity: 0.5;
        }

        @media(max-width: 1000px) {
            margin: 0 3rem;

            img {
                width: 25%;
            }

            p {
                font-size: 1.5rem;
            }
        }
    }
`;

export default function about() {
    return (
        <AboutStyles>
            <header>
                <h1>About JLentz Consulting</h1>
            </header>
            <section>
                <img src="./JeremeLentzHeadshot1.png" alt='Jereme Lentz of JLentz Consulting' />
                <p>
                    JLentz Consulting is a small business consulting agency formed in 2021 by Jereme Lentz. Jereme decided to start his own consulting firm so that he could use his experience and insights to help other small business owners' make more informed decisions and help them to run more profitable, efficient, and overall more successful organizations. Jereme has a bachelor of science degree in Accounting from Rowan University and resides in southern New Jersey. 
                </p>    
                <hr /> 
                <p> 
                    Jereme has over a decade's worth of experience managing the finances of business's with multi-million dollar revenues. Jereme got his start managing the finances of his family's business which was a telecommunications engineering and installation firm that operated in the Mid-Atlantic region of the United States. 
                </p>
                <hr />
                <p>
                    Jereme then moved on to work at a services provider in the mortgage industry. Jereme was responsible for all financial and accounting functions at this company, as well managing employee benefits and human resources. Jereme helped the ownership of this company analyze and ultimately make the purchase of another service provider in an adjacent industry and helped to set up a new business to run this entity. Jereme was responsible for setting up and managing all of the financial processes of this company and also established and maintained the benefits and human resources for this company.
                </p>
            </section>
        </AboutStyles>
    )
}
