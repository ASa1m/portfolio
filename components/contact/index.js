"use client"
import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import dotenv from 'dotenv';
import Link from 'next/link';
import Image from "next/image";

dotenv.config(); // Load variables from .env

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Your form submission logic here
    if (submissionStatus !== "success") {
      const { name, email, message } = formData;
      const templateParams = {
        from_name: `${name} - ${email} )`,
        to_name: "Abdullah Saim",
        message: message
      };
      if (name !== "" && email !== "" && message !== "") {
        emailjs
          .send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            templateParams,
            process.env.NEXT_PUBLIC_EMAILJS_KEY
          )
          .then(
            () => {
              setSubmissionStatus("success");
              setFormData({
                name: "",
                email: "",
                message: ""
              });
              setTimeout(() => {
                setSubmissionStatus(null);
              }, [10000]);
            },
            error => {
              setSubmissionStatus("error");
            }
          );
      } else {
        setSubmissionStatus("error");
        setTimeout(() => {
          setSubmissionStatus(null);
        }, [10000]);
      }
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto">
        <div className="flex flex-col md:flex-row items-center items-space-between justify-between space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex flex-row items-center justify-center space-y-2">
            <h2 className="text-2xl font-bold text-white">Contact Me</h2>
          </div>
          <div className="flex flex-row items-center justify-center space-x-4">
            <Link href="https://www.linkedin.com/in/abdullah-saim/" target="_blank">
              <Image src="/static/icons/linkedin.svg" className="w-10 h-10 mt-2" width={40} height={40} />
            </Link>
            <Link href="mailto:abdullah.saim.as@gmail.com" target="_blank">
              <Image src="/static/icons/gmail.svg" className="w-10 h-10 mt-2" width={40} height={40} />
            </Link>
            <Link href="https://wa.me/923008438161" target="_blank">
              <Image src="/static/icons/whatsapp.svg" className="w-10 h-10 mt-2" width={40} height={40} />
            </Link>
          </div>
        </div>
        <form className="mt-6 mb-10 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Name"
              style={{ backgroundColor: "#7b89a8" }}
              className="mt-1 block w-full rounded-md border-transparent shadow-sm focus:border-white focus:ring-white text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              style={{ backgroundColor: "#7b89a8" }}
              className="mt-1 block w-full rounded-md border-transparent shadow-sm focus:border-white focus:ring-white text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Message"
              style={{ backgroundColor: "#7b89a8" }}
              className="mt-1 block w-full rounded-md border-transparent shadow-sm focus:border-white focus:ring-white text-white"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              style={{
                borderColor: "#32c7ff",
                borderWidth: 2,
                color: "#32c7ff",
                fontWeight: 700
              }}
              className="w-full flex justify-center bg-transparent border border-transparent rounded-md py-2 px-4 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {submissionStatus === "success" ? "Sent" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
