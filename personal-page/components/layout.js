import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/layout.module.css';

const name = 'Jonathan Sulliman';
const siteTitle = 'Jonathan Sulliman - Desenvolvedor Front-End'

function Layout({ children, home }) {
    return (
        <div className={styles.container}>  

            <Head>
                <meta name="description" content="Página pessoal com portifólio de Jonathan Sulliman" />
                <meta name="og:title" content={siteTitle} />
            </Head>

            <header className={styles.header}>

                {home? (
                        <>
                            <img 
                                src="/Img/John.jpg" 
                                className={`${styles.headerHomeImage} ${styles.borderCircle}`}
                                alt={name} 
                            />
                            <h1 className={styles.heading2xL}>{name}</h1>
                        </>
                    ) : (
                        <>
                            <Link href='/'>
                                <a>
                                    <img 
                                        src="/Img/John.jpg" 
                                        className={`${styles.headerImage} ${styles.borderCircle}`}
                                        alt={name} 
                                    />
                                </a>
                            </Link>
                            <h2 className={styles.headingLg}>
                                <Link href='/'>
                                    <a className={styles.colorInherit}>{name}</a>
                                </Link>
                            </h2>
                        </>
                    )
                }

            </header>

            <main>{ children }</main>

            {!home && (
                <div className={styles.backToHome}>
                    <Link href='/'>
                        <a>← Início</a>
                    </Link>
                </div>
            )}

        </div>
    );
};

export default Layout;