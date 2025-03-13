import { NextResponse } from "next/server";

import clientPromise from "../../lib/mongodb";


interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: Request) {
    const {name, email, subject, message}: ContactForm = await req.json();


    if(!name || !email || !subject || !message) {
        return NextResponse.json({error: "All Fields are reauired"}, {status: 400});
    }

    try {
        const client = await clientPromise;
        const db = client.db('NextDB');
        console.log("Connected to MongoDB");
        const result = await db.collection('messageCollection').insertOne({
            name,
            email,
            subject,
            message,
            createdAt: new Date(),
        });

        console.log("Data Inserted: ", result);
        return NextResponse.json({message: 'Form submitted successfully!', data: result}, {status: 201});

    } catch(error) {
        return NextResponse.json({error: 'Internal Server Error'},{status:500});
    }
}


// Get route for fetching all contact form submissions


export async function GET(){
    try{
        const client = await clientPromise;
        const db = client.db('NextDB');

        // Fetch all the contact form

        const contacts = await db.collection('messageCollection').find().toArray();
        return NextResponse.json({contacts});
    }catch(error){
        return NextResponse.json({error: "Failed to fetch contact details"},{status: 500});
    }
}