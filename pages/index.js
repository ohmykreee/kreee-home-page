import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import { siteconf } from '../site-config.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Twemoji } from 'react-emoji-render'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>Home Page - Kreee</title>
      <meta name="description" content="Home page for Kreee" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

      <main className={styles.main}>
        <Cardlist />
        <a className={styles.footer} href={siteconf.footer.url}>{siteconf.footer.text}</a>
      </main>
      
    </div>
  )
}

class Cardlist extends React.Component {
  render() {
    return(
      <SimpleBar>
      <div className={styles.cardlist}>
        <Card type='Blog card'/>
        <Card type='Main card'/>
        <Card type='Project eureka'/>
        </div>
      </SimpleBar>
    )
  }
}

class Card extends React.Component {
  render() {
    let info, card_style
    switch(this.props.type) {
      case 'Blog card':
        info = siteconf.kblog
        card_style = { backgroundColor: 'rgba(0, 99, 177, 0.6)' }
        break
      case 'Main card':
        info = siteconf.main
        card_style = { backgroundColor: 'rgba(0, 0, 0, 0.6)' }
        break
      case 'Project eureka':
        info = siteconf.eureka
        card_style = { backgroundColor: 'rgba(202, 80, 16, 0.6)' }
    }
    return(
      <div className={styles.card} style={card_style}>
        <img src={info.avatar} alt={this.props.type + '\'s avatar image.'}></img>
        <p> <Twemoji svg text={info.description} /> </p>
        <div className={styles.card_buttonlist}>
          <Buttonlist buttons={info.buttons}/>
        </div>
      </div>
    )
  }
}

class Buttonlist extends React.Component {
  render() {
    const lists = this.props.buttons
    const renderButton = lists.map((item) => 
      <a key={item.name} href={item.url} target="_blank">
        <FontAwesomeIcon icon={item.fa} color="white"></FontAwesomeIcon>
      </a>
    )
    return(renderButton)
  }
}