import React from "react"
import * as styles from "./base.module.scss"
import { GatsbyBrowser } from "gatsby"
import useRandomBg, { bgMetadata } from "../hooks/use-random-bg"
import initIcon from "../hooks/add-icons"
import SimpleBar from 'simplebar-react'

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ( { element } ) => {
  initIcon()

  return (
    <Cointainer>{ element }</Cointainer>
  )
}

class Cointainer extends React.Component<{children: JSX.Element}, {bg: bgMetadata}> {
  constructor(props: {children: JSX.Element}) {
    super(props)

    this.state = {
      bg: {
        file: "",
        source: "Page rendering...",
        artist: "Please enable JavaScript to render this site :(",
        url: "/"
      }
    }
  }

  componentDidMount(): void {
    this.setState({bg: useRandomBg()})
  }

  render(): React.ReactNode {
    return(
      <>
      <div className={styles.container} style={{ backgroundImage: 'url(' + this.state.bg.file + ')', }}>
        <SimpleBar className={styles.wrapper}>
          <div className={styles.main}>
            { this.props.children }
          </div>
        </SimpleBar>
      </div>
      <div className={styles.bg_info}><a href={this.state.bg.url} rel="noreferrer" target="_blank"><p>Artist: {this.state.bg.artist}</p><p>Source: {this.state.bg.source}</p></a></div>
      </>
    )
  }
}