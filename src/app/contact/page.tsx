"use client";

import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setContact } from "../store/contactSlice";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Creating new contact with a unique ID
    const newContact = {
      id: Date.now(),
      ...form,
    };

    dispatch(setContact(newContact));

    try {
      const res = await fetch("../api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContact),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Form Submited Successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        alert(data.error || "Error...Not Submiting");
      }
    } catch (error) {
      console.log("Error", error);
      alert("Error... Not submited");
    }
  };
  return (
    <div className="bg-gray-100 text-black py-8 px-4 text-center font-semibold">
      <div>
        <h2 className="text-2xl">Contact Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4 py-6">
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="Your Name"
            className="w-full p-2 border rounded"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Your Email"
            className="w-full p-2 border rounded"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            value={form.subject}
            placeholder="Subject"
            className="w-full p-2 border rounded"
            required
            onChange={handleChange}
          />
          <textarea
            placeholder="Your Message"
            name="message"
            value={form.message}
            className="w-full p-2 border rounded h-32"
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="w-50 bg-blue-400 text-white py-2 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
      <div>
        <div className="text-center space-y-6">
          <h1 className="text-2xl font-semibold">Get in Touch</h1>
          <p className="flex items-center justify-center space-x-2">
            <FaMapMarkerAlt className="text-blue-500" />
            <span>9 Rowson Street, Rockdale, Sydney</span>
          </p>
          <p className="flex items-center justify-center space-x-2">
            <FaPhone className="text-blue-500" />
            <span>Phone: 0491793455</span>
          </p>
          <p className="flex items-center justify-center space-x-2">
            <FaEnvelope className="text-blue-500" />
            <span>contact@sr.com.au</span>
          </p>
        </div>
        <div className="flex justify-center space-x-4 mt-4 text-2xl">
          <a
            href="https://twitter.com"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            <FaTwitter />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
