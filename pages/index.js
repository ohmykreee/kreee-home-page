import Head from 'next/head'
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
      <a key={item.name} href={item.url} target="_blank" title={item.name} rel="noreferrer">
        <FontAwesomeIcon icon={item.fa} color="white"></FontAwesomeIcon>
      </a>
    )
    return(renderButton)
  }
}