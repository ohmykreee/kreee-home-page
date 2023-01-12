import "../styles/global.scss"
import * as styles from "../styles/links.module.scss"
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import type { IconProp } from "@fortawesome/fontawesome-svg-core"
import { SEO } from "../components/seo"
import LinksData from "../data/links.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Terminal, ThemeStateContext } from "../components/terminal"
import { Footer } from "../components/footer"

interface LinksMetadata {
  name: string
  icon: string
  url: string
  noNewTab?: boolean
}

const LinksPage: React.FC<PageProps> = () => {

  const LinksMetadata: LinksMetadata[] = LinksData

  return (
    <>
    <Terminal title="Links"><ThemeStateContext.Consumer>
      {theme => {
        return (
          <div className={styles.container}>
            {LinksMetadata.map((link) => {
              return(
                <a key={link.name} href={link.url} rel="noreferrer" target={link.noNewTab? "_self":"_blank"}>
                  <FontAwesomeIcon icon={link.icon as IconProp}/>
                  <span>{link.name}</span>
                </a>
              )
            })}
          </div>
        )
      }}
    </ThemeStateContext.Consumer></Terminal>
    <Footer />
    </>
  )
}


export default LinksPage
export const Head: HeadFC = () => <SEO title="Links - Kreee's Home Page"/>
