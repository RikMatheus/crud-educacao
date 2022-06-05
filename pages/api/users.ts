import { NextApiRequest, NextApiResponse } from "next"
import { useDB } from '../../src/services/database.mjs'

export default async function Users (req: NextApiRequest, res: NextApiResponse) {
    const db = await useDB()

    if(req.method === 'POST') {
        const statement = await db.prepare('INSERT INTO users (name, email, password, created_at) VALUES (?, ?, ?, datetime(\'now\'))')
        statement.run([
            req.body.name,
            req.body.email,
            req.body.password
        ])
        statement.finalize()
    }

    const users = await db.all('SELECT id, name, email, created_at FROM users')

    res.json(users)
}