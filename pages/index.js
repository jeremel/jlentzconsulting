import Head from 'next/head'
import styled from 'styled-components';

const IndexStyles = styled.div`
    margin: 0;
    padding: 0;

    hr {
      width: 85%;
    }
    
    .header {
      // background-color: rgb(10, 51, 81);
      // background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(10,51,81,1) 20%, rgba(0,212,255,1) 100%);
      // color: #fff;
      margin-bottom: 2rem;
      // margin: 0 1.5rem;
      padding-left: 2rem;

       h1 {
        margin: 1rem 1rem 2rem;
        padding: 1rem 0;
        font-size: 4.5rem;
        text-decoration: underline;
        text-decoration-color: #ffb500;
      }
     } 

    .main {
      display: flex;
      flex-wrap: wrap;
      gap: 4rem;
      padding-left: 2rem;
      padding-bottom: 2rem;

      .mainLeft{
        width: 45vw;
        // background-color: rgb(10, 51, 81);
        padding: 0 1rem;
        // border-radius: 7px;

        h2 {
          font-size: 2rem;
          margin: 0 0 2rem;
        }
    
        h3 {
          font-size: 1.5rem;
          margin: 0;
        }
      }

      .mainRight {
        padding-left: 7rem;
        margin-top: -1.5rem;

        img {
          width: 25.5rem;
          // filter: drop-shadow(5px 2px rgb(10, 51, 81));
        }
      }
    }

    .services {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
      padding-top: 2rem;
      margin-top: 1rem;
    }

    .services .card {
      width: 18rem;

      img {
        width: 16rem;
      }

      h1 {
        font-size: 1.5rem;
        margin: 0;  
      }

      p {
        margin: 0;
        
      }
    }

`;

export default function Home() {
  return (
    <IndexStyles>
      <Head>
        <title>JLentz Consulting</title>
        <meta name="JLentz Consulting" content="JLentz Consulting" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <h1>Grow your small business.</h1>
      </header>

      <main className="main">
        <div className="mainLeft">
          <h2>
            We will work with you so your business can reach it's full potential.
          </h2>
          <h3>
            We will work closely with you to improve processes and increase profitability through coaching and collaboration.
          </h3>
        </div>
        <div className="mainRight">
          <img src="/Croods-Chart.png" alt="JLentz Consulting" />
        </div>
      </main>

      <hr />

      <section className="services">
        <div className="card">
          <img src="/Consulting1.jpg" />
          <h1>Coaching</h1>
          <p>Too small to hire a CFO, VP of Finance, or Controller? We will provide ongoing financial advice and analysis for your business that will fit your needs.</p>
        </div>
        <div className="card">
          <img src="/Consulting2.jpg" />
          <h1>Accounting</h1>
          <p>We will analyze your current accounting systems and processes to make sure that they are meeting your business's needs and providing accurate, actionable information.</p>
        </div>
        <div className="card">
          <img src="/Consulting3.jpg" />
          <h1>Planning</h1>
          <p>Have you wanted to implement a new plan, product, or initiative but lack the time, manpower, and/or expertise in order to make that plan a reality? We can help you put your plan into action.</p>
        </div>
        <div className="card">
          <img src="/Consulting4.jpg" />
          <h1>Implementation</h1>
          <p>We will put a plan in place and work with you to ensure that your strategic initiatives are implemented in a thoughtful, clear, and impactful way.</p>
        </div>
      </section>
    </IndexStyles>
  )
}
