import { GetServerSideProps } from "next"
import { parseCookies } from "nookies"

import Dashboard from "../src/components/templates/Dashboard"

export default function Home () {
    return (
        <Dashboard />
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { 'crud.token': token } = parseCookies(ctx)
    
    if(!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}