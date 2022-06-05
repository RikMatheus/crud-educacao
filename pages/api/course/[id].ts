import { NextApiRequest, NextApiResponse } from "next"
import { useDB } from "../../../src/services/database.mjs"

export default async function CourseId (req: NextApiRequest, res: NextApiResponse) {
    const db = await useDB()
    const course = await db.get('SELECT * FROM courses WHERE id = ?', 
        [ req.query.id ]
    )
    
    res.json(course)
}