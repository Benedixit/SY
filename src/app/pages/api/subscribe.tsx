import type { NextApiRequest, NextApiResponse } from "next"
import axios, { AxiosError } from "axios"


type Data = {
    message?: string
    error?: string
}

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {

    const { email, name } = req.body;

  
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    if (!email || !email.includes('@') || !name)
        return res.status(400).json({ error: 'Name and valid email are required'})

    const data = {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
            FNAME: name
        }
    }
    const API_KEY = process.env.MAILCHIMP_API_KEY
    const LIST_ID = process.env.MAILCHIMP_LIST_ID
    const DATACENTER = process.env.MAILCHIMP_SERVER_PREFIX

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`

    try {
        await axios.post(url, data,{
            headers: {
                Authorization: `apikey ${API_KEY}`},

        })

        return res.status(201).json({ message: 'Successfully Subscribed'})
    }

    catch (error: unknown){
        const err = error as AxiosError<{ detail?: string }>
        const errMsg = err?.response?.data?.detail ||
        err?.message || 
        'An unexpected error occured'
        
        return res.status(400).json({error: errMsg})
    }
    
}