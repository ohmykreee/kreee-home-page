import React from "react"
import { Link } from "gatsby"
import * as styles from "./terminal.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ThemeStateContext } from "./base"

export const Terminal = ({ title, children }: {title: string, children: JSX.Element}): JSX.Element => {

  return (
    <ThemeStateContext.Consumer>
      {theme => {
        return(
          <div className={styles.terminal_container} style={{outlineColor: theme}}>
          <TerminalTitle title={title}/>
          <TerminalWindow>{ children }</TerminalWindow>
        </div>
        )
      }}
    </ThemeStateContext.Consumer>
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
          {this._PinnedTab.includes(this.props.title)? <></>:<h1 key={this.props.title.toLowerCase().replaceAll(" ", "_")} className={styles.title_btn_pressed}>{this.props.title}</h1>}
          {this._PinnedTab.map((tab: string) => {
            return(this.props.title === tab? 
              <h1 key={tab.toLowerCase()} className={styles.title_btn_pressed}>{tab}</h1>:
              <Link key={tab.toLowerCase()} className={styles.title_btn} to={(tab === "Home")? "/":`/${tab.toLowerCase()}`}>{tab}</Link>)
          })
          }
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