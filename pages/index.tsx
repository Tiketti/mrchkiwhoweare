import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Button from '../components/Button';
import React, { useState } from 'react';

const Home = () => {
  const [viewmode, setViewmode] = useState('basic');

  return (
    <div className={styles.container}>
      <Head>
        <title>MRC Helsinki - Who We Are</title>
        <meta name="description" content="Mikkeller Running Club Helsinki" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Mikkeller Running Club <span className={styles.highlight}>Helsinki</span>
        </h1>

        <div className={styles.description}>
          <div className={styles.buttonParent}>
            <Button onclick={() => setViewmode(viewmode === 'basic' ? 'coc' : 'basic')}>See Code of Conduct</Button>
          </div>

          {viewmode === 'basic' ? (
            <>
              <p>Our religion is running, and our temple is where great beer is served.</p>
              <p>
                We welcome all. It doesn't matter if you do it to compete, to stay in shape or just to take your mind
                off the everyday. What matters is that you lace up — and have tons of fun.
              </p>
            </>
          ) : null}
          <p>
            We don't discriminate against any gender, orientation, color or creed. Like beer, runners come in all sizes,
            shapes and forms. Thus we won't tolerate body shaming, racism or harassment of any kind. Ever. We are one
            tribe — runners and beer drinkers all.
          </p>
          {viewmode === 'basic' ? (
            <>
              <p>
                At this club... There's always a place at the table. There's always good stories. There's always a
                feeling of togetherness.
              </p>
            </>
          ) : null}
          <p>
            Ours is a table with friendly faces, frequent toasts and camaraderie. In this club, nobody gets excluded,
            left behind or left by the wayside.
          </p>
          {viewmode === 'basic' ? (
            <p>
              We didn't choose running, running chose us. We didn't choose beer, beer chose us. We are family. We are
              MRC Helsinki
            </p>
          ) : null}
        </div>
      </main>
    </div>
  );
};

export default Home;
