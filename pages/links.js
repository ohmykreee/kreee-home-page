import React from 'react'
import styles from '../styles/Links.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinkList } from '../components/LinkList'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import 'simplebar'
import 'simplebar/dist/simplebar.min.css'

export default function Links() {
  return (
    <div className={styles.container}>
      <Header title='Links - Kreee' />
      
      <div className={styles.main}>
        <div className={styles.wrapper} data-simplebar>
          <div>
            <List />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

class List extends React.Component {
  render() {
    const links = LinkList()
    return(
      <div className={styles.link_content}>
        {links.map((item) => <a key={item.name} href={item.url} target={item.noNewtab === true ? "_self" : "_blank"} title={item.name} rel="noreferrer">
          <div className={styles.link_button}><FontAwesomeIcon icon={item.fa} color="white" /><span>{item.name}</span></div>
        </a>)}
      </div>
    )
  }
}