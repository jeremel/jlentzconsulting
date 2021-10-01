import styled from 'styled-components'
import emailjs from 'emailjs-com';

const FormStyles = styled.div`
display: flex;
flex-direction: column;
color: #fff;

form {
    display: flex;
    flex-direction: column;
    width: 500px;
}

label {
    font-size: 1.25rem;
    font-weight: 500;
}

input[type=text], select {
    width: 100%;
    padding: 16px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 1rem;
  }

  textarea {
    width: 100%;
    height: 100px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    resize: none;
    font-size: 1rem;
  }

  input[type=submit] {
    width: 100%;
    background-color: rgb(10, 51, 81);
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
    background-color: rgba(10, 51, 81, 0.8);
  }

  input[type=submit]:focus {
    background-color: rgba(10, 51, 81, 0.8);
  }

  input[type=submit]:active {
    background-color: #FFF;
    color: rgb(10, 51, 81);
    font-weight: 600;
  }
`;

export default function ContactForm() {
    let submitButton = document.querySelector('.submitButton');
    // console.log(submitButton);
    
    function sendEmail(e) {
        e.preventDefault();
        // EmailJS functionality code below:
        emailjs.sendForm('service_knnbs27', 'template_zr5ta6j', e.target, 'user_W8ApuPB5z1Kso3Hg1KQMm')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          submitButton.setAttribute("disabled", true);
          submitButton.setAttribute("value", "Thank You!");
      }

    //   function handleSubmit(e) {

    //   }

    return (
        <FormStyles id="contact">
            <form onSubmit={sendEmail}>
                <label htmlFor="name">Name: 
                    <input
                        required 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Your Name"
                    />
                </label>
                <label htmlFor="company">Company:
                    <input 
                        type="text" 
                        id="company" 
                        name="company"
                        placeholder="Your Company Name"
                    />
                </label>
                <label htmlFor="email">Email:
                    <input 
                        required
                        type="text" 
                        id="email" 
                        name="email"
                        placeholder="Your Email Address"
                    />
                </label>
                <label htmlFor="message">Message:
                    <textarea
                        required
                        id="message" 
                        name="message"
                        placeholder="Please write your message to us here!"
                    />
                </label>
                <input className="submitButton" type="submit" value="Submit" />
            </form>
        </FormStyles>
    )
}