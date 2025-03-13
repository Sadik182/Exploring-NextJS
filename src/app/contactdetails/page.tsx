"use client"
import { useSelector } from "react-redux"
import { RootState} from '../store/store'

export default function ContactDetails() {

    const contacts = useSelector((state: RootState) => state.contact.contacts);
    return(
        <div className="bg-gray-200 py-8">
            <h2 className="text-2xl font-semibold text-center text-black ">Submited Contact List</h2>

            {contacts.length === 0 ? (
                <p className="text-center text-black">No submission yet!</p>
            ):(
                <ul className="text-center text-black ">
                    {contacts.map((contact) => (
                        <li key={contact.email} className="p-3 border rounded bg-white shadow-md">
                            <h3 className="font-semibold">{contact.name}</h3>
                            <p>Email: {contact.email}</p>
                            <p>Subject: {contact.subject}</p>
                            <p>Message:{contact.message}</p>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    )
}