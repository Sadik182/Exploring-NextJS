"use client";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

import { useEffect, useState } from "react";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
export default function ContactDetails() {
  const [contacts, setContact] = useState<ContactForm[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  //   useEffect(() => {
  //     const fetchContacts = async () => {
  //       try {
  //         const response = await fetch("../api/contact");
  //         if (!response.ok) {
  //           throw new Error("Failed to fetch contacts");
  //         }
  //         const data = await response.json();
  //         console.log(data);
  //         setContact(data.contacts);
  //       } catch (err) {
  //         setError("Error fetching data");
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchContacts();
  //   }, []);

  //const contacts = useSelector((state: RootState) => state.contact.contacts);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("../api/contact");
        if(!response.ok){
            throw new Error("Faild to Fetch Contacts");
        }
        const data = await response.json();
        setContact(data.contacts);
      } catch (err) {
        setError("Error fetching Data");
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  return (
    <div className="bg-gray-200 py-8">
      <h2 className="text-2xl font-semibold text-center text-black ">
        Submited Contact List
      </h2>
      {loading ? (
        <p className="text-center text-black">Loading....</p>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : contacts.length === 0 ? (
        <p className="text-center text-black">No submission yet!</p>
      ) : (
        <ul className="text-center text-black ">
          {contacts.map((contact) => (
            <li
              key={contact.email}
              className="p-3 border rounded bg-white shadow-md"
            >
              <h3 className="font-semibold">{contact.name}</h3>
              <p>Email: {contact.email}</p>
              <p>Subject: {contact.subject}</p>
              <p>Message:{contact.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
