import submitForm from "./submitForm.ts";
import "./style.css";

const ContactForm = () => {
  return (
    <form
      onSubmit={submitForm}
      action="https://questions.greatfrontend.com/api/questions/contact-form"
      method="post"
    >
      <div>
        <label htmlFor="name-input">Name</label>
        <input id="name-input" name="name" type="text" />
      </div>
      <div>
        <label htmlFor="emailinput">Email</label>
        <input id="name-input" name="email" type="email" />
      </div>
      <div>
        <label htmlFor="message-input">Message</label>
        <textarea id="message-input" name="message" />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};
export default ContactForm;
