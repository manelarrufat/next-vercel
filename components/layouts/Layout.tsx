import { FC } from 'react';
import Head from 'next/head';

import { Navbar } from '../ui';


interface Props {
    children?: React.ReactNode;
    title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
    
    return (
        <>
            <Head>
                <title>{ title || 'PokemonApp'}</title>
                <meta name='author' content='Manel Arrufat' />
                <meta name='description' content={`Informació sobre el pokemon ${title}`}  />
                <meta name='keywords' content={`${title}, pokemon, pokedex`} />

                <meta property="og:title" content={`Informació sobre ${title}`} />
                <meta property="og:description" content={`Aquesta és la pàgina sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />

            </Head>

            {/* Navbar */}
            <Navbar />

            <main style={{
                padding: '0px 20px'
            }}>
                { children }
            </main>

        </>
    )
}
