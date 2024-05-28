import { useRef } from "react";
import "./styles.css";
import emailjs from "@emailjs/browser";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomeForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_56zb7a7', 'template_y4szm44', form.current, {
        publicKey: 'UsYnSriSpStbXjA7P',
      })
      .then(
        () => {
          toast.success("Mail was sent!");
        },
        (error) => {
          toast.error("Something is wrong. Please, try againt!");
        },
      );
  };
  return (
    <div class="card">
      <span class="title">Leave a Message</span>
      <form class="form" ref={form} onSubmit={sendEmail}>
        <div class="group">
          <input placeholder="" type="text" name="user_name" required="" />
          <label for="name">Name</label>
        </div>
        <div class="group">
          <input
            placeholder=""
            type="email"
            id="email"
            name="user_email"
            required=""
          />
          <label for="email">Email</label>
        </div>
        <div class="group">
          <textarea
            placeholder=""
            id="message"
            name="message"
            rows="5"
            required=""
          ></textarea>
          <label for="message">Message</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CustomeForm;
