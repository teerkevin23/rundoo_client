import React from 'react';
import asyncSubmitForm from "../actions/asyncSubmitForm";


// KevinForm is a Contact Form without really using too much JS
// with name, email, message fields
// // message <textarea>
// submit button
// // contains text send
// // clicking button submits form


const KevinForm = () => {
  const ENDPOINT = `https://www.greatfrontend.com/api/questions/contact-form`
  // eslint-disable-next-line no-unused-vars
  const submitForm = (event) => {
    const form = event.target;
    const formData = new FormData(form);
    const response = fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
      })
    })
    const text = response.text();
    alert(text);
  };


  return (
    <form
      action={ENDPOINT}
      method="post"
      onSubmit={asyncSubmitForm}>
      <div>
        <label htmlFor="name-input">Name:</label>
        <input id='name-input'
               name='name'
               type='text'
               role={'name-input'}
               placeholder={"enter name"}
        />
      </div>
      <div>
        <label htmlFor="email-input">Email:</label>
        <input id={'email-input'}
               name={'email'}
               type={'email'}
               role={'email-input'}
               placeholder={"enter email"}
        />
      </div>
      <div>
        <label htmlFor={"pw-input"}>PW:</label>
        <input id={'pw-input'}
               name={'pw'}
               type={'password'}
               role={'password-input'}
        />
      </div>
      <div>
        <label htmlFor="message-input">Message:</label>
        <textarea id={"message-input"}
                  name="message"
                  role={'message-input'}
                  placeholder={"..."}
        >
        </textarea>
      </div>
      <div>
        <button>
          Click Me!
        </button>
      </div>
    </form>
  );
};
export default KevinForm;

// takeaways
// - Link labels and inputs using label htmlFor and input id
// - inputs should have appropriate types (attribute)
