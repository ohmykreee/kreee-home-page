import React, { createContext } from "react"
import * as styles from "./base.module.scss"
import { GatsbyBrowser } from "gatsby"
import useRandomBg, { bgMetadata } from "../hooks/use-random-bg"
import initIcon from "../hooks/add-icons"
import useThemeColor from "../hooks/use-theme-color"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SimpleBar from "simplebar-react"

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ( { element } ) => {
  initIcon()

  return (
    <Cointainer>{ element }</Cointainer>
  )
}

export const ThemeStateContext = createContext<string | undefined>(undefined)

class Cointainer extends React.Component<{children: JSX.Element}, {bg: bgMetadata, theme: string}> {
  constructor(props: {children: JSX.Element}) {
    super(props)

    this.state = {
      bg: {
        file: "",
        source: "Page rendering...",
        artist: "Please enable JavaScript to render this site :(",
        url: "/"
      },
      theme: useThemeColor.getCurrColor()
    }
  }

  componentDidMount(): void {
    this.setState({bg: useRandomBg()})
    // trick to solve viewpoint size is'n calcuated currently on mobile browser using vh
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
    window.addEventListener('resize', () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
    })
  }

  render(): React.ReactNode {
    return(
      <ThemeStateContext.Provider value={this.state.theme}>
        <div className={styles.bg} style={{ backgroundImage: `url(${this.state.bg.file})`, }}></div>
        <SimpleBar className={styles.wrapper}>
          <div className={styles.bg_info}><a href={this.state.bg.url} rel="noreferrer" target="_blank"><p>Artist: {this.state.bg.artist}</p><p>Source: {this.state.bg.source}</p></a></div>
          <div className={styles.main}>
            { this.props.children }
          </div>
        </SimpleBar>
        <div className={styles.theme_btn} onClick={() => {this.setState({theme: useThemeColor.getNextColor()})}}><FontAwesomeIcon icon="repeat" color={this.state.theme} /></div>
      </ThemeStateContext.Provider>
    )
  }
}