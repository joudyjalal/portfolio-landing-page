import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
const iconArr = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    contact: "",
  },
  {
    id: 2,
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    contact: "",
  },
];
export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <div>
      <section className="contact" id="contact">
        <div className="top-section">
          <h5>Get in touch</h5>
          <h2>contact me</h2>
        </div>
        <div className="container  contact-container ">
          <div className="contact-options">
            {iconArr.map(({ id, icon, title, contact }) => (
              <article key={id} className="contact-option">
                {icon}
                <h4>{title}</h4>
                <a href={contact} target="_blank">
                  send message
                </a>
              </article>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="full Name" name="name" />
            <input type="email" placeholder="your email" name="email" />
            <textarea name="" id="" placeholder="Enter Your Message"></textarea>
            <button className="btn btn-primary">send message</button>
          </form>
        </div>
      </section>
    </div>
  );
}
