import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

export async function useDB () {
    return open({
        filename: './crud.db',
        driver: sqlite3.Database
    })
}

async function setup () {
    const db = await useDB()
    await db.migrate({ force: 'last' })

    console.info('database - finished migration')

    // const users = await db.all('SELECT name, email, created_at FROM users')
    // console.log('USERS', JSON.stringify(users, null, 2))

    // const courses = await db.all('SELECT * FROM courses')
    // console.log('COURSES', JSON.stringify(courses, null, 2))
}

setup()