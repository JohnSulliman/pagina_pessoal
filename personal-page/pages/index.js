import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/layout.module.css';
import { getPostForDate } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home( fileData ) {

  return (

    <Layout home>

      <Head>
        <title>{ siteTitle }</title>
      </Head>

      <section className={ styles.headingMd }>

        <p>Olá! Meu nome é Jonathan.</p>
        <p>Esse é o meu site pessoal.</p>

      </section>

      <section>

        <h2>Blog</h2>

        <ul>

          { fileData.map( ({ id, title, date }) => {

            <li key={id}>
              
              <Link href={`/posts/${id}`}>

                <a>{title}</a>

              </Link>

              <small>

                <Date dateString = {date}/>

              </small>

            </li>

          } ) }

        </ul>

      </section>

    </Layout>

  );

};

export async function getStaticProps() {
  const fileData = getPostForDate()

  return {
    props: {
      fileData
    }
  };

}