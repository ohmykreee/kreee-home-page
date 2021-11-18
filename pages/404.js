import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'
import { siteconf } from '../site-config.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Twemoji } from 'react-emoji-render'

export default function Custom404() {
  return (
  <div className={styles.container}>
  <Head>
    <title>Awwh - 404 Page Not Found</title>

    <meta name="siteBaseUrl" content={siteconf.baseurl} />
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Kreee" />
    <meta name="description" content="Home page of ohmykreee.top" />
    <meta name="keywords" content="kreee,personal,responsive,font awesome,react" />
    <meta name="title" content="Home Page - Kreee" />
    <meta itemProp="name" content="Home Page - Kreee" />
    <meta itemProp="description" content="Home page of ohmykreee.top" />
    <meta property="og:title" content="Home Page - Kreee" />
    <meta property="og:description" content="Home page of ohmykreee.top" />
    <meta property="og:image" content="/avatar.jpg" />
    <meta property="og:url" content="https://www.ohmykreee.top/" />
    <meta property="og:site_name" content="Home Page - Kreee" />
    <meta property="og:type" content="website" />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#603cba" />
    <meta name="theme-color" content="#ffffff" />
  </Head>

  <main className={styles.main}>
      <Card404 />
      <a className={styles.footer} href={siteconf.footer.url}>{siteconf.footer.text}</a>
  </main>
      
  </div>
    )
  }

  class Card404 extends React.Component {
    render() {
      return(
        <div className={styles.card} style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', marginLeft: 'auto', marginRight: 'auto' }}>
        <img className={styles.card_img} src="/avatar.jpg" alt="404 Not Found"></img>
        <p> <Twemoji svg text="404 | This page could not be found. 👾" /> </p>
        <div className={styles.card_buttonlist}>
        <a href={siteconf.baseurl} title="Home" rel="noreferrer">
            <FontAwesomeIcon icon="fa-solid fa-house" color="white"></FontAwesomeIcon>
        </a>
        </div>
      </div>
      )
    }
  }