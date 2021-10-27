import styled from 'styled-components'
import emailjs from 'emailjs-com';
import useForm from '../lib/useForm';
import { useState } from 'react';

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

    fieldset {
            border: none;
            padding: 0;
            margin: 0;
        }

        fieldset:disabled {
            input[type="text"], input[type="email"], textarea {
                background-color: rgb(237, 237, 237);
                color: rgba(0, 0, 0, 0.6);
            }

            input[type="submit"] {
                cursor: not-allowed;
                background-color: rgba(10, 51, 81, 0.8);
                color: rgba(0,212,255,1);
            }
        }
`;

export default function ContactForm() {   
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

      const { inputs, handleChange } = useForm({
          name: '',
          company: '',
          email: '',
          message: '',
      });
      const [inputText, setInputText] = useState("Submit");
      const [disable, setDisable] = useState(false);

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
                            value={inputs.name}
                            disabled={disable}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="company">Company:
                        <input 
                            type="text" 
                            id="company" 
                            name="company"
                            placeholder="Your Company Name"
                            value={inputs.company}
                            disabled={disable}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="email">Email:
                        <input 
                            required
                            type="text" 
                            id="email" 
                            name="email"
                            placeholder="Your Email Address"
                            value={inputs.email}
                            disabled={disable}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="message">Message:
                        <textarea
                            required
                            id="message" 
                            name="message"
                            placeholder="Please write your message to us here!"
                            value={inputs.message}
                            disabled={disable}
                            onChange={handleChange}
                        />
                    </label>
                    <input 
                        className="submitButton" 
                        type="submit" 
                        value={inputText}
                        disabled={disable}
                        onClick={() => {
                            setInputText("Thank You!");
                            setDisable(true);
                            }
                        }
                    />
            </form>
        </FormStyles>
    )
}