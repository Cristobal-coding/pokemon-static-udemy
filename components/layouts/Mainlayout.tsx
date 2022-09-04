import Head from "next/head"
import { FC, PropsWithChildren } from "react"
import { NavbarFC } from '../ui';

type PropsLayout = {
    title?: string;
}

export const Mainlayout: FC<PropsWithChildren<PropsLayout>> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'Pokemon app'}</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Head>

            <NavbarFC />

            <main>
                {children}
            </main>
        </>
    )
}
