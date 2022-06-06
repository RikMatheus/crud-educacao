import { NextApiRequest, NextApiResponse } from "next"
import { v4 as uuid } from "uuid"

import { useDB } from "../../src/services/database.mjs"

export default async function Authentication (req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST') {
        res.status(405).json({message: "Method Not Allowed"})
    }

    const db = await useDB()
    const user = await db.get('SELECT * FROM users WHERE email = ? AND password = ?', [
        req.body.email,
        req.body.password
    ])

    if(user) {
        res.json({
            token: uuid() + `[${user.id}]`,
            user: user
        })
    }else{
        res.json({})
    }
}