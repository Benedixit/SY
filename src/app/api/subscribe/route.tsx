import { NextRequest, NextResponse } from "next/server"
import axios, { AxiosError } from "axios"

export async function POST (req: NextRequest) {

    const { fname, email }: { email: string; fname: string } = await req.json()
    console.log("Received data:", { fname, email });

    if (!email || !email.includes('@') || !fname)
        return NextResponse.json({ error: 'Name and valid email are required'}, { status: 400 })

    const data = {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
            FNAME: fname
        }
    }
    const API_KEY = process.env.MAILCHIMP_API_KEY
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
    const DATACENTER = process.env.MAILCHIMP_SERVER_PREFIX

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`
    const options = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString('base64')}`
        }
    }

    try {
        await axios.post(url, data, options)
        console.log("Successfully subscribed to Mailchimp:", { fname, email })
        return NextResponse.json({ message: 'Successfully Subscribed'}, { status: 200 })
        
    }

    catch (error: unknown){
        const err = error as AxiosError<{ detail?: string }>
        const errMsg = err?.response?.data?.detail ||
        err?.message || 
        'An unexpected error occured'
        console.error('Error subscribing to Mailchimp:', errMsg)
         return NextResponse.json({ message: errMsg }, { status: 500 });
    }
    
}