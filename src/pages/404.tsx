import "../styles/global.scss"
import * as styles from "../styles/notfound.module.scss"
import * as React from "react"
import { Link } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import { SEO } from "../components/seo"
import { Terminal, ThemeStateContext } from "../components/terminal"
import { Footer } from "../components/footer"


const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
    <Terminal title="404"><ThemeStateContext.Consumer>
      {theme => {
        return (
          <div className={styles.container}>
            <Link to="/"><img src="/avatar.jpg" alt="404 - Not Found" style={{outlineColor: theme}}></img></Link>
            <p>404 | This page could not be found. 👾<br />
            You can use the navigation above to go back to Home.</p>
          </div>
        )
      }}
    </ThemeStateContext.Consumer></Terminal>
    <Footer />
    </>
  )
}


export default NotFoundPage
export const Head: HeadFC = () => <SEO title="404 - Kreee's Home Page"/>
