import { NextApiRequest, NextApiResponse } from "next"

import { useDB } from "../../../src/services/database.mjs"

export default async function UserId (req: NextApiRequest, res: NextApiResponse) {
    const db = await useDB()

    if(req.method === 'PUT') {
        const statement = await db.prepare('UPDATE users SET name = ?, email = ? WHERE id = ?')
        statement.run([
            req.body.name,
            req.body.email,
            req.query.id
        ])
        statement.finalize()
    }

    if(req.method === 'DELETE') {
        const statement = await db.prepare('DELETE FROM users WHERE id = ?')
        statement.run([
            req.query.id
        ])
        statement.finalize()

        res.json({})

        return
    }

    const user = await db.get('SELECT id, name, email, created_at FROM users WHERE id = ?', 
        [ req.query.id ]
    )

    res.json(user)
}

// const response = await fetch('http://localhost:3000/api/user/1', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: "Mario", email: "ultimopassageiro@redetv.com" }) })