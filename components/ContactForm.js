import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components'

const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USERID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID;
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICEID;

const FormStyles = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;

    form {
        display: flex;
        flex-direction: column;
        width: 32.5rem;
    }

    label {
        font-size: 1.25rem;
        font-weight: 600;
    }

    input[type=text], select {
        width: 500px;
        padding: 1rem 1.25rem;
        margin: 0.5rem 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        font-size: 1rem;
        background-color: #fff;
    }

    input[type=text]:disabled {
      cursor: not-allowed;
    }

    textarea {
        width: 500px;
        height: 100px;
        padding: 0.75rem 1.25rem;
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        background-color: #fff;
        resize: none;
        font-size: 1rem;
    }

    textarea:disabled {
      cursor: not-allowed;
    }

    input[type=submit] {
        width: 500px;
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

    input[type=submit]:disabled {
      cursor: not-allowed;
    }

    input[type=submit]:disabled:hover {
      background-color: rgb(10,51,81);
    }

    @media(max-width: 1000px) {
      form {
        width: 25rem;
      }

      input[type=text], select, textarea, input[type=submit] {
        width: 300px;
      }
    }
`;

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const [inputText, setInputText] = useState("Submit");
  // const [disable, setDisable] = useState(false);

  return (
    <FormStyles>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />

      <label>Company</label>
      <input type="text" name="company" />

      <label>Email</label>
      <input type="text" name="email" />

      <label>Message</label>
      <textarea name="message" />
      <input 
        type="submit" 
        value={inputText}
        
        onClick={() => {
          setInputText("Thank You!");
          // setDisable(true);
          }
        }
      />
      </form>
    </FormStyles>
  );
};