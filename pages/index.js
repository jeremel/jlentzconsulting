import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';

const IndexStyles = styled.div`
    margin: 0;
    padding: 0;

    // Header Section of Index Page
    header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      justify-items: center;
      padding: 3rem 8rem;
      background: rgb(16,70,110);
      background: linear-gradient(120deg, rgba(16,70,110,1) 0%, rgba(0,212,255,1) 100%);
      color: #fff;

      h2 {
        font-size: 1.75rem;
        margin: 0;
        line-height: 1.5;
        font-family: 'Libre Baskerville', serif;
      }
    
      h3 {
        font-size: 1.25rem;
        margin: 0;
        line-height: 1.65;
        font-family: 'Libre Baskerville', serif;
      }

      @media(min-width: 1000px) {
        img {
          transform: translateY(4rem);
          width: 500px;
        }
        
      }

      @media(max-width: 1000px) {
        grid-template-columns: 1fr;
      }

    }

    // Services section of Index page
    .services {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
      padding: 0;
      margin: 4rem 0;
    }

    .services .card {
      width: 19rem;

      img {
        width: 16rem;
        height: 12rem;
      }

      h1 {
        font-size: 1.5rem;
        margin: 0;
        padding: 10px;
        color: rgba(10, 51, 81, 1);
      }

      p {
        margin: 0;
        padding: 10px;
        font-family: 'Libre Baskerville', serif;
      }
    }

    .services .card:hover {
      background-color: rgba(0,212,255,0.2);
      border: 4px solid rgb(10,51,81);
      border-radius: 2%;

      h1 {
        border-bottom: 4px solid rgb(10,51,81);
        padding-bottom: 1px;
      }
    }

    .services .card:active {
      opacity: 0.5;
    }

    @media(max-width: 1000px) {
      header {
        justify-content: center;
        align-items: center;
        padding: 2rem;
        grid-template-columns: 1fr;

        h2 {
          font-size: 1.5rem;
        }
      }
    }
`;

export default function Home() {
  return (
    <IndexStyles>
      <Head>
        <title>JLentz Consulting</title>
        <meta name="JLentz Consulting" content="JLentz Consulting" />
        <link rel="icon" href="/JL_Logo.png" />
      </Head>

      <header>
         <div className="header1">
          <h2>
            JLentz Consulting is a South Jersey based consultancy that provides small business coaching, financial and operational advisory services, and project management services for owners and operators who want to take their small business to the next level.
          </h2>
        </div>
        <div className="image">
          <img src="/Croods-Chart.png" alt="JLentz Consulting" />
        </div>
        <div className="header2">
          <h3>
            We work to solve your pain points through custom solutions that are specifically tailored to fit the needs of your business. We know that each business's requirements are unique, and we excel at providing creative solutions to every problem we encounter.
          </h3>
        </div>
        
      </header>

      <main className="services" id="services">
        <div className="card">
          <img src="/Allura-UIWindows.png" alt="Small Business Coaching" />
          <h1><Link href='/services'>Coaching</Link></h1>
          <p>
            We work one on one with small business owners so that they can feel more confident about the decisions that they are making for their business. With over a decade of experience working directly with owners of small businesses, we are acutely aware of their challenges, concerns, paint points, and needs.
          </p>
        </div>
        <div className="card">
          <img src="/Brazuca-Chart.png" alt="Financial Analysis" />
          <h1><Link href='/services'>Finances</Link></h1>
          <p>
            If you are struggling to create a financial plan or budget that actually works or are planning for a large capital expenditure in the near future, we will provide strategic advisory services to help you analyze your situation and make the most informed financial decision possible. We have managed the finances of multiple multi-million dollar small businesses for more than ten years, and will use our experience and expertise to create a plan that works for you.
          </p>
        </div>
        <div className="card">
          <img src="/Amigos-Graph.png" alt="Operational Analysis" />
          <h1><Link href='/services'>Operations</Link></h1>
          <p>
            Running a business is hard work, and even the smallest changes often will have a profound ripple effect across your entire organization. We will work with you to create a plan to implement that will take the guesswork out of running the operations of your business. With experience in accounting, HR, operations, and executive management, we are uniquely positioned to help you achieve your goals.
          </p>
        </div>
        <div className="card">
          <img src="/Amigos-Workspace.png" alt="Project Management" />
          <h1><Link href='/services'>Project Management</Link></h1>
          <p>
            Whether you already have a project in the pipeline that needs somebody dedicated to making sure it is accomplished on time and on budget or you are planning on some change in your busineess but do not have the time to manage it yourself, we are available to manage your projects in a way that will keep all stakeholders involved and up to date through each step of the process. We believe that our use of clear communication, our attention to detail, and our genuine desire to see our clients succeed make us the best choice to manage your project.
          </p>
        </div>
      </main>
    </IndexStyles>
  )
}
