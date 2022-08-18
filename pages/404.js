import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ButtomAnimation } from '../components/Animation'
import React from 'react'
import styles from '../styles/Home.module.css'
import { siteconf } from '../site-config.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Twemoji } from 'react-emoji-render'

export default function Custom404() {
  return (
  <div className={styles.container}>
  <Header title='Awwh - 404 Page Not Found' />

  <main className={styles.main}>
      <Card404 />
      <Footer />
  </main>
      
  </div>
    )
  }

  class Card404 extends React.Component {
    render() {
      const style = siteconf.main.bgstyle
      style['margin'] = '0 auto'

      return(
        <div className={styles.card} style={style}>
        <img className={styles.card_img} src="/avatar.jpg" alt="404 Not Found"></img>
        <p> <Twemoji svg text="404 | This page could not be found. 👾" /> </p>
        <div className={styles.card_buttonlist}>
        <ButtomAnimation name='Home'>
        <a href={siteconf.baseurl} title="Home" rel="noreferrer">
            <FontAwesomeIcon icon="fa-solid fa-house" color="white"></FontAwesomeIcon>
        </a>
        </ButtomAnimation>
        </div>
      </div>
      )
    }
  }