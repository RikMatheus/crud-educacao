import { NextApiRequest, NextApiResponse } from "next"
import { useDB } from "../../src/services/database"

export default async function Courses (req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET') {
        res.status(405).json({message: "Method Not Allowed"})
    }

    const db = await useDB()
    const courses = await db.all('SELECT * FROM courses')

    res.json(courses)
}