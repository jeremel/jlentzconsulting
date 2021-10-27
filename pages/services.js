import Head from 'next/head';
import styled from "styled-components"

const ServicesStyles = styled.div`
    hr {
            width: 55%;
            opacity: 0.5;
        }
    
    // Header section styles

    header {
        background: rgba(10, 51, 81, 1);
        background: linear-gradient(120deg, rgba(16,70,110,1) 0%, rgba(0,212,255,1) 100%);
        padding: 1rem 0;


    h1 {
        margin: 0;
        padding: 0;
        color: #fff;
        font-size: 3rem;
        text-align: center;
        font-weight: 700;
        letter-spacing: 1.5px;
    }

    ul {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin: 0.5rem 0 0 0;
    }

    ul li {
        list-style: none;
        color: #fff;
        font-size: 2rem;
        font-family: 'Libre Baskerville', serif;
    }

    ul li a:hover {
        /* color: rgb(10, 51, 81); */
        font-weight: 600;
        text-decoration: underline;
    }

    @media(max-width: 1300px) {
        h1 {
            font-size: 2rem;
        }

        ul {
            /* border: 2px solid red; */
            flex-direction: column;
            align-items: center;
            transform: translateY(-0.5rem);
        }

        ul li {
            font-size: 1.75rem;
            padding: 0;
            margin: 1rem 0 0 0;
            /* border: 2px solid red; */
        }
    }
    }

    // Services Section Styles

    .service {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
        margin: 3rem 6rem;
        padding: 0 10rem;

        h1 {
            color: rgb(10, 51, 81);
            font-size: 2.5rem;
            letter-spacing: 1px;
        }

        h1:hover {
            color: rgb(0,212,255);
        }

        p {
            font-family: 'Libre Baskerville', serif;
            font-size: 1.25rem;
        }

        img {
            max-width: 400px;
        }
    }

    @media(max-width: 1000px) {
        grid-template-columns: 1fr;
        
        ul li {
            justify-self: center;
        }

        .service {
            display: flex;
            flex-direction: column;
            padding: 0;
            margin: 1rem 3rem;
        }
    }
`;

export default function services() {
    return (
        <ServicesStyles>
            <Head>
                <title>JLentz Consulting Services</title>
                <meta name="JLentz Consulting" content="JLentz Consulting Services" />
                <link rel="icon" href="/JL_Logo.png" />
            </Head>
            <header>
                <h1>Small Business Consulting Services:</h1>
                <ul>
                    <li><a href="#coaching">Coaching</a></li>
                    <li><a href="#finances">Financial Advisory</a></li>
                    <li><a href="#operations">Operations Advisory</a></li>
                    <li><a href="#projectmanagement">Project Management</a></li>
                </ul>
            </header>
            <div className="service" id="coaching">
                <div>
                    <h1>
                        Coaching
                    </h1>
                    <p>
                        We work one on one with small business owners so that they can feel more confident about the decisions that they are making for their business. With over a decade of experience working directly with owners of small businesses, we are acutely aware of their challenges, concerns, paint points, and needs.
                    </p>
                </div>
                <img src="/Croods-KeepinginTouch.png" alt="Small Business Coaching" />
            </div>
            <hr />
            <div className="service" id="finances">
                <img src="/TheLittleThings-Working.png" alt="Financial Advisory Services" />
                <div>
                    <h1>
                        Financial Advisory
                    </h1>
                    <p>
                        If you are struggling to create a financial plan or budget that actually works or are planning for a large capital expenditure in the near future, we will provide strategic advisory services to help you analyze your situation and make the most informed financial decision possible. We have managed the finances of multiple multi-million dollar small businesses for more than ten years, and will use our experience and expertise to create a plan that works for you.
                    </p>
                </div>
            </div>
            <hr />
            <div className="service" id="operations">
            <div>
                    <h1>
                        Operations Advisory
                    </h1>
                    <p>
                        Running a business is hard work, and even the smallest changes often will have a profound ripple effect across your entire organization. We will work with you to create a plan to implement that will take the guesswork out of running the operations of your business. With experience in accounting, HR, operations, and executive management, we are uniquely positioned to help you achieve your goals.
                    </p>
                </div>
                <img src="/Dayflow-Teamwork.png" alt="Operations Advisory Services" />
            </div>
            <hr />
            <div className="service" id="projectmanagement">
            <img src="/ProjectManagementBlush.png" alt="Project Management Services" />
                <div>
                    <h1>
                        Project Management
                    </h1>
                    <p>
                        Whether you already have a project in the pipeline that needs somebody dedicated to making sure it is accomplished on time and on budget or you are planning on some change in your busineess but do not have the time to manage it yourself, we are available to manage your projects in a way that will keep all stakeholders involved and up to date through each step of the process. We believe that our use of clear communication, our attention to detail, and our genuine desire to see our clients succeed make us the best choice to manage your project.
                    </p>
                </div>
            </div>
        </ServicesStyles>
    )
}
