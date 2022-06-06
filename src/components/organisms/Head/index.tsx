import NextHead from 'next/head'

type HeadProps = {
    title: string,
}

export default function Head ({ title }: HeadProps) {
    return (
        <NextHead key="head">
            <title>{ title }</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet"></link>
        </NextHead>
    );
}