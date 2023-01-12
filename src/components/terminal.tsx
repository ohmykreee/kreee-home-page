import React, { useState, createContext } from "react"
import { Link } from "gatsby"
import useThemeColor from "../hooks/use-theme-color"
import * as styles from "./terminal.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ThemeStateContext = createContext<string | undefined>(undefined)

export const Terminal = ({ title, children }: {title: string, children: JSX.Element}): JSX.Element => {
  const [theme, setTheme] = useState<string>(useThemeColor.getCurrColor())

  return (
    <ThemeStateContext.Provider value={theme}>
      <div className={styles.terminal_container} style={{outlineColor: theme}}>
        <TerminalTitle title={title}/>
        <TerminalWindow>{ children }</TerminalWindow>
      </div>
    <div className={styles.theme_btn} onClick={() => {setTheme(useThemeColor.getNextColor())}}>
      <FontAwesomeIcon icon="repeat" color={theme} />
    </div>
    </ThemeStateContext.Provider>
  )
}

class TerminalTitle extends React.Component<{title: string}> {
  constructor(props: {title: string}) {
    super(props)
  }

  private _PinnedTab: string[] = ["Home", "Links", "About"]

  render(): React.ReactNode {
    return(
      <div className={styles.terminal_title}>
        <div className={styles.title_container}>
          {this._PinnedTab.map((tab: string) => {
            return(<Link key={tab.toLowerCase()} className={(this.props.title === tab)? styles.title_btn_pressed:styles.title_btn} to={(tab === "Home")? "/":`/${tab.toLowerCase()}`}>{tab}</Link>)
          })
          }
          {this._PinnedTab.includes(this.props.title)? <></>:<Link key={this.props.title.toLowerCase().replaceAll(" ", "_")} className={styles.title_btn_pressed} to={`/${this.props.title.toLowerCase().replaceAll(" ", "_")}`}>{this.props.title}</Link>}
        </div>
        <div className={styles.close_btn}><FontAwesomeIcon icon="xmark"/></div>
      </div>
    )
  }

}

class TerminalWindow extends React.Component<{children: JSX.Element}> {
  constructor(props: {children: JSX.Element}) {
    super(props)
  }

  render(): React.ReactNode {
    return(
      <div className={styles.terminal_window}>{this.props.children}</div>
    )
  }

}