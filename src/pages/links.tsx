import "../styles/global.scss"
import * as styles from "../styles/links.module.scss"
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import type { IconProp } from "@fortawesome/fontawesome-svg-core"
import { SEO } from "../components/seo"
import LinksMetaData from "../data/links.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Terminal } from "../components/terminal"
import { ThemeStateContext } from "../components/base"
import { Footer } from "../components/footer"

interface LinkDisplayed {
  list: {
    name: string
    icon: string
    url: string
    noNewTab?: boolean
  }[]
  search: string
}

const LinksPage: React.FC<PageProps> = () => {

  const [filteredLinks, setFilteredLinks] = React.useState<LinkDisplayed>({list: LinksMetaData, search: ""})

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const comparedLinks = LinksMetaData.filter(link => {
      return link.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setFilteredLinks({list: comparedLinks, search: event.target.value.toLowerCase()})
  }


  return (
    <>
    <Terminal title="Links"><ThemeStateContext.Consumer>
      {theme => {
        return (
          <>
          <SearchBar onChangeHandler={onChangeHandler} theme={theme}/>
          <div className={styles.container}>
            <LinksList filteredLinks={filteredLinks} />
          </div>
          </>
        )
      }}
    </ThemeStateContext.Consumer></Terminal>
    <Footer />
    </>
  )
}

class SearchBar extends React.Component<{onChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void, theme: string | undefined}> {
  constructor(props: {onChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void, theme: string | undefined}) {
    super(props)
  }

  render(): React.ReactNode {
    return(
      <div className={styles.search} style={{borderBottomColor: this.props.theme}}>
        <input type="search" placeholder="Search..." onChange={ this.props.onChangeHandler } />
        <FontAwesomeIcon icon="magnifying-glass" />
      </div>
    )
  }
}

class LinksList extends React.Component<{filteredLinks: LinkDisplayed}> {
  constructor(props: {filteredLinks: LinkDisplayed}) {
    super(props)
  }

  render(): React.ReactNode {
    if (this.props.filteredLinks.list.length !== 0) {
      return(
        <>
        {this.props.filteredLinks.list.map((link) => {
          return(
            <a key={link.name} href={link.url} rel="noreferrer" target={link.noNewTab? "_self":"_blank"}>
              <FontAwesomeIcon icon={link.icon as IconProp}/>
              <span>{link.name}</span>
            </a>
          )
        })}
        </>
      )
    } else {
      switch (this.props.filteredLinks.search) {
        case "kreee":
        case "ohmykreee":
        case "kre3":
        case "kre":
        case "hi":
        case "hello":
          return(<span>Hi, Kreee is here! 🐺</span>)

        default:
          return(<span>No result found!</span>)
      }
    }
  }
}


export default LinksPage
export const Head: HeadFC = () => <SEO title="Links - Kreee's Home Page"/>
