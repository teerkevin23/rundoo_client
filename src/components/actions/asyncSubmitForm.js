const SUBMIT_URL =
  'https://www.greatfrontend.com/api/questions/contact-form';
export default async function aysncSubmitForm(event) {
  console.log("async version");
  const form = event.target;
  try {
    const formData = new FormData(form);
    const response = await fetch(SUBMIT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }),
    });
    await foo();
    bar();

    const text = await response.text();
    alert(text);
  } catch (_) {
    alert('Error submitting form!');
  }
}
const foo = async evt => {
  console.log("Hello World foo");
}
const bar = () => {
  console.log("Hello World bar");
}