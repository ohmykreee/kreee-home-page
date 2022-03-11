import React from 'react'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { siteconf } from '../site-config.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Twemoji } from 'react-emoji-render'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header title='Home Page - Kreee' />

      <main className={styles.main}>
        <Cardlist />
        <Footer />
      </main>
      
    </div>
  )
}

class Cardlist extends React.Component {
  constructor(props) {
    super(props)

    this.scrollRef = React.createRef()
  }

  handleScroll = (e) => {
    this.scrollRef.current.scrollTo({
      left: this.scrollRef.current.scrollLeft += e.deltaY,
      behavior: 'smooth',
    })
  }

  componentDidMount() {
    this.scrollRef.current.scrollLeft = 0.7 * this.scrollRef.current.clientWidth
    this.scrollRef.current.addEventListener('wheel', this.handleScroll, {passive: true})
  }

  componentWillUnmount() {
    this.scrollRef.current.removeEventListener('wheel', this.handleScroll, {passive: true})
  }

  render() {
    return(
      <SimpleBar scrollableNodeProps={{ ref: this.scrollRef, style: {overflowX: 'scroll'}}}>
      <div className={styles.cardlist}>
        <div className={styles.card_space}></div>
        <Card type='kblog'/>
        <Card type='main'/>
        <Card type='eureka'/>
        <div className={styles.card_space}></div>
      </div>
      </SimpleBar>
    )
  }
}

class Card extends React.Component {
  render() {
    const type = this.props.type
    const info = siteconf[type]
    return(
      <div className={styles.card} style={info.bgstyle} >
        <img className={styles.card_img} src={info.avatar} alt={info.name}></img>
        <p> <Twemoji svg text={info.description} /> </p>
        <div className={styles.card_buttonlist}>
          {info.buttons.map((item) =>
            <a key={item.name} href={item.url} target="_blank" title={item.name} rel="noreferrer">
              <FontAwesomeIcon icon={item.fa} color="white" />
            </a>
          )}
        </div>
      </div>
    )
  }
}