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
}

setup()