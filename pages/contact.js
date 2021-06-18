import styled from 'styled-components'
import emailjs from 'emailjs-com';

const FormStyles = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


form {
    height: 75vh;
    padding-top: 1rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
}

label {
    font-size: 1.25rem;
    font-weight: 500;
}

input[type=text], select {
    width: 100%;
    padding: 12px 50px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  textarea {
    width: 100%;
    height: 80px;
    padding: 12px 50px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    resize: none;
  }

  input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 50px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type=submit], value {
      font-size: 1.5rem;
  }

  input[type=submit]:hover {
    background-color: #45a049;
  }
`;

export default function contact() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_knnbs27', 'template_zr5ta6j', e.target, 'user_W8ApuPB5z1Kso3Hg1KQMm')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

    return (
        <FormStyles id="contact">
            <form onSubmit={sendEmail}>
                <label htmlFor="name">Name*: 
                    <input
                        required 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Name"
                    />
                </label>
                <label htmlFor="company">Company:
                    <input 
                        type="text" 
                        id="company" 
                        name="company"
                        placeholder="Company"
                    />
                </label>
                <label htmlFor="email">Email*:
                    <input 
                        required
                        type="text" 
                        id="email" 
                        name="email"
                        placeholder="Email Address"
                    />
                </label>
                <label htmlFor="message">Tell us how we can help*:
                    <textarea
                        required
                        id="message" 
                        name="message"
                        placeholder="Please write your message here"
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </FormStyles>
    )
}
