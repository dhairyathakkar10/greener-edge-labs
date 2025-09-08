import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.scss";
import { CircularProgress } from "@mui/material";

export const Contact = () => {
  const form = useRef();
  const [formDetails, setFormDetails] = useState({
    name: "",
    emailId: "",
    phoneNumber: "",
    projectSize: "",
    product: "Cast-In-Situ Flooring",
    message: "",
  });
  const [formError, setFormError] = useState({
    isNameValid: undefined,
    isEmailValid: undefined,
    isPhoneNumberValid: undefined,
    isProjectSizeValid: undefined,
    isMessageValid: undefined,
  });
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [mailMessage, setMailMessage] = useState("");
  const [isSendingMessage, setIsSendingMessage] = useState(false);
  useEffect(() => {
    if (mailMessage !== "") {
      setTimeout(() => {
        setMailMessage("");
      }, 5000);
    }
  }, [mailMessage]);

  const sendEmail = (e) => {
    setIsSendingMessage(true);
    e.preventDefault();

    emailjs
      .sendForm("service_qbaia7c", "template_44yl6dr", form.current, {
        publicKey: "PUPGzBEH2-4pjB1U0",
      })
      .then(
        () => {
          setMailMessage("We've got your requirement, We'll contact you shortly");
          setFormDetails({
            name: "",
            emailId: "",
            phoneNumber: "",
            projectSize: "",
            product: "Cast-In-Situ Flooring",
            message: "",
          });
          setIsSendingMessage(false);
        },
        (error) => {
          setMailMessage("Sorry for inconvenience, Please try again later!");
          console.log("FAILED...", error.text);
          setIsSendingMessage(false);
        }
      );
  };
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#2E2E2E]">Start Your Project Today</h2>
        <form ref={form} id="contact-form" className="bg-white p-8 rounded-xl shadow-xl space-y-6" onSubmit={sendEmail}>
          <div>
            <label htmlFor="name" className="block font-bold mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formDetails.name}
              onChange={(e) => {
                if (e.target.value === "") {
                  setFormError({ ...formError, isNameValid: false });
                } else {
                  setFormError({ ...formError, isNameValid: true });
                }
                setFormDetails({ ...formDetails, name: e.target.value });
              }}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="John Doe"
            />
            <div className="w-full text-left">{formError.isNameValid === false && <span className={styles.inputError}>{"Name is Required"}</span>}</div>
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block font-bold mb-1">
              Phone Number
            </label>
            <input
              value={formDetails.phoneNumber}
              onChange={(e) => {
                if (e.target.value.length === 10) {
                  setFormError({ ...formError, isPhoneNumberValid: true });
                } else {
                  setFormError({ ...formError, isPhoneNumberValid: false });
                }
                setFormDetails({ ...formDetails, phoneNumber: e.target.value });
              }}
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="8888899999"
              required
            />
            <div className="w-full text-left">{formError.isPhoneNumberValid === false && <span className={styles.inputError}>{"Please enter a valid Phone number"}</span>}</div>
          </div>
          <div>
            <label htmlFor="email" className="block font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              value={formDetails.emailId}
              onChange={(e) => {
                if (new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "g").test(e.target.value)) {
                  setFormError({ ...formError, isEmailValid: true });
                } else {
                  setFormError({ ...formError, isEmailValid: false });
                }
                setFormDetails({ ...formDetails, emailId: e.target.value });
              }}
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="hello@example.com"
              required
            />
            <div className="w-full text-left">{formError.isEmailValid === false && <span className={styles.inputError}>{"Please enter a valid Email ID"}</span>}</div>
          </div>
          <div>
            <label htmlFor="project-size" className="block font-bold mb-1">
              Estimated Project Size (sqft)
            </label>
            <input
              type="number"
              value={formDetails.projectSize}
              onChange={(e) => {
                if (e.target.value === "") {
                  setFormError({ ...formError, isProjectSizeValid: false });
                } else {
                  setFormError({ ...formError, isProjectSizeValid: true });
                }
                setFormDetails({ ...formDetails, projectSize: e.target.value });
              }}
              id="project-size"
              name="project-size"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="2500"
            />
            <div className="w-full text-left">{formError.isProjectSizeValid === false && <span className={styles.inputError}>{"Please enter a valid Project Size"}</span>}</div>
          </div>
          <div>
            <label htmlFor="interest" className="block font-bold mb-1">
              Interested Product/Service
            </label>
            <select
              id="interest"
              name="interest"
              value={formDetails.product}
              onChange={(e) => {
                setFormDetails({ ...formDetails, product: e.target.value });
              }}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
              required
            >
              <option value="Cast-In-Situ Flooring">Cast-In-Situ Flooring</option>
              <option value="Custom Panels">Custom Panels</option>
              <option value="Color & Aggregate Consultation">Color & Aggregate Consultation</option>
              <option value="General Enquiry">General Enquiry</option>
            </select>
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="message" className="block font-bold">
                Message / Project Idea
              </label>
              {/* <button type="button" id="generate-vision-btn" className="text-sm text-[#E2725B] hover:underline flex items-center gap-1">
                ✨ Generate Project Vision
                <span id="vision-spinner" className="spinner hidden"></span>
              </button> */}
            </div>
            <textarea
              value={formDetails.message}
              onChange={(e) => {
                if (e.target.value === "") {
                  setFormError({ ...formError, isMessageValid: false });
                } else {
                  setFormError({ ...formError, isMessageValid: true });
                }
                setFormDetails({ ...formDetails, message: e.target.value });
              }}
              id="message"
              name="message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Describe your project idea here... e.g., 'A modern cafe with a warm, inviting feel, about 1500 sqft'"
            ></textarea>
            <div className="w-full text-left">{formError.isMessageValid === false && <span className={styles.inputError}>{"Please enter a valid Message"}</span>}</div>
          </div>
          <ReCAPTCHA
            sitekey="6LeXhaorAAAAAGKhOiA_CxXFFpOVoYQLuE-76UQG"
            onChange={(e) => {
              setIsCaptchaVerified(true);
            }}
            onExpired={() => setIsCaptchaVerified(false)}
          />
          <div className="text-center">
            {mailMessage}
            <button type="submit" className="w-full bg-[#E2725B] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#d1614a] transition-transform hover:scale-105 shadow-lg disabled:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100" disabled={isSendingMessage || !formError.isNameValid || !formError.isEmailValid || !formError.isPhoneNumberValid || !formError.isProjectSizeValid || !formError.isMessageValid || !isCaptchaVerified}>
              {isSendingMessage ? <CircularProgress size={24} color="#5cb562" /> : "Send Enquiry"}
            </button>
          </div>
          <div id="form-success-message" className="hidden text-center p-3 bg-green-100 text-green-800 rounded-lg">
            Thank you for your enquiry! We will be in touch soon.
          </div>
        </form>
      </div>
    </section>
  );
};
