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
constructor(props) {
  super(props)

  this.scrollRef = React.createRef()
  this.scrollX = { 
    overflowX: "scroll",
  }
}

  componentDidMount() {
    const ref = this.scrollRef.current
    ref.scrollLeft = 0.7 * ref.clientWidth

    ref.addEventListener('wheel', (event) => {
      event.preventDefault();
      ref.scrollTo({
        left: ref.scrollLeft += event.deltaY,
        behavior: 'smooth',
      })
    })
  }

  render() {
    return(
      <SimpleBar scrollableNodeProps={{ ref: this.scrollRef, style: this.scrollX}}>
      <div className={styles.cardlist}>
        <div className={styles.card_space}></div>
        <Card type='Blog'/>
        <Card type='Main'/>
        <Card type='Project Eureka'/>
        <div className={styles.card_space}></div>
      </div>
      </SimpleBar>
    )
  }
}

class Card extends React.Component {
  render() {
    let info, card_style
    switch(this.props.type) {
      case 'Blog':
        info = siteconf.kblog
        card_style = { backgroundColor: 'rgba(0, 99, 177, 0.6)' }
        break
      case 'Main':
        info = siteconf.main
        card_style = { backgroundColor: 'rgba(0, 0, 0, 0.6)' }
        break
      case 'Project Eureka':
        info = siteconf.eureka
        card_style = { backgroundColor: 'rgba(202, 80, 16, 0.6)' }
    }
    return(
      <div className={styles.card} style={card_style}>
        <img className={styles.card_img} src={info.avatar} alt={this.props.type}></img>
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
      <a key={item.name} href={item.url} target="_blank" title={item.name}>
        <FontAwesomeIcon icon={item.fa} color="white"></FontAwesomeIcon>
      </a>
    )
    return(renderButton)
  }
}