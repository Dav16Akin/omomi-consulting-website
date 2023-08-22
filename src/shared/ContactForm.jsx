import React, { useState } from "react";
import emailjs from "emailjs-com";
// import ReCAPTCHA from "react-recaptcha";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
//   const [captchaValue, setCaptchaValue] = useState("");
  const [errors, setErrors] = useState({});
//   const recaptchaRef = React.createRef();

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "*Name is required";
    if (!email) newErrors.email = "*Email is required";
    if (!message) newErrors.message = "*message is required";
    // if (!captchaValue) newErrors.captcha = "Please complete the CAPTCHA";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const form = useRef();

 

  const handleSubmit = (e) => {
    e.preventDefault();

    // this.contact_number.value = Math.random() * 100000 | 0;

    if (validateForm()) {
      emailjs
        .sendForm(
          "omomi_webcontact1",
          "contact_form",
          e.target,
          "WQmwcwTf9Pu9w3DaT"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      // Clear form fields after submission
      setName("");
      setEmail("");
      setMessage("");
    //   setCaptchaValue("");
      setErrors({});
    //   recaptchaRef.current.reset();
    }
  };

  return (
    <form id="contact-form" className="form" onSubmit={handleSubmit}>
      <input type="hidden" name="contact_number"></input>
      <div className="form-name">
        <div className="nameBox">
          <div className="form-text">First Name</div>
          <input name="user_name" value={name} type="text" onChange={(e) => setName(e.target.value)} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="nameBox">
          <div className="form-text">Last Name</div>
          <input type="text" />
        </div>
      </div>
      <div className="emailBox">
        <div className="form-text">Email</div>
        <input name="user_email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="msgBox">
        <div className="form-text">Message</div>
        <textarea name="message" value={message} type="text" onChange={(e) => setMessage(e.target.value)} />
        {errors.message && <span className="error">{errors.message}</span>}
      </div>
      {/* <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="6LcCWrEnAAAAACHip72-S9SQt-UP4FRehZIgmgVh"
        onChange={(value) => setCaptchaValue(value)}
      />
      {errors.captcha && <span className="error">{errors.captcha}</span>} */}
      <button
        value="Send"
        type="submit"
        className="btn btn-lg btn-primary"
      >
        submit
      </button>
    </form>
  );
};
