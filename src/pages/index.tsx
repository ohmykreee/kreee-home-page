import "../styles/global.scss"
import * as styles from "../styles/index.module.scss"
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import { SEO } from "../components/seo"
import useThemeColor from "../hooks/use-theme-color"
import BioData from "../data/bio.json"
import LinksData from "../data/links.json"
import { Terminal, ThemeStateContext } from "../components/terminal"
import { Footer } from "../components/footer"
import Typewriter from 'typewriter-effect';


const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
    <Terminal title="Home"><ThemeStateContext.Consumer>
      {theme => {
        return (
          <div className={styles.container}>
            <BriefBio theme={theme} />
            <BriefLinks theme={theme} />
          </div> 
        )
      }}
    </ThemeStateContext.Consumer></Terminal>
    <Footer />
    </>
  )
}

interface BioMetadata {
  avatar: string
  props: string
  signs: string
  render: any
}

class BriefBio extends React.Component<{theme: string | undefined}> {
  constructor(props: {theme: string | undefined}) {
    super(props)
    this.bioRef = React.createRef()
  }

  private _themeColor: string[] = useThemeColor.getAllColors()
  private _bioMetadata: BioMetadata = BioData
  private _typedText: string = `
  <p><span>Brief Introduction</span><br />
  ------------------<br />
  ${Object.keys(this._bioMetadata.render).map(key => `<span>${key}: </span>${this._bioMetadata.render[key]}<br />`).join(" ")}
  <span style="letter-spacing:-5px;font-weight:700;">${this._themeColor.map(color => `<span style="color:${color};">▇▇</span>`).join("")}</span></p>
  `
  private bioRef: React.RefObject<HTMLDivElement>

  updateColor(): void {
    const style = document.createElement("style")
    style.innerHTML = `.Typewriter__wrapper span{color:${this.props.theme};}`
    Array.prototype.slice.call(this.bioRef.current?.getElementsByTagName('style')).forEach((item) => {
      this.bioRef.current?.removeChild(item)
    }) // delete old style tag to prevent memory leaks.
    this.bioRef.current?.appendChild(style)
  }

  componentDidMount(): void {
    this.updateColor()
  }

  componentDidUpdate(prevProps: Readonly<{ theme: string | undefined }>, prevState: Readonly<{ text: string }>, snapshot?: any): void {
    this.updateColor()
  }

  render(): React.ReactNode {
    return(
      <>
      <div><span className={styles.terminal_domain}>{this._bioMetadata.props}</span>:<span className={styles.terminal_path}>~</span>$ info</div>
      <div className={styles.bio_container} ref={this.bioRef}>
        <img src={this._bioMetadata.avatar} alt="Kreee's avatar" style={{outlineColor: this.props.theme}}></img>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString(this._typedText)
              .start();
          }}
          options={{
            autoStart: false,
            delay: 1,
            loop: false,
            cursor: "",
            wrapperClassName: "Typewriter__wrapper"
          }}
        />
      </div>
      </>
    )
  }
}

interface LinksMetadata {
  name: string
  icon: string
  url: string
  noNewTab?: boolean
}

class BriefLinks extends React.Component<{theme: string | undefined}> {
  constructor(props: {theme: string | undefined}) {
    super(props)
  }

  private _bioMetadata: BioMetadata = BioData
  private _briefLinks: LinksMetadata[] = LinksData.slice(0, 4)

  render(): React.ReactNode {
    return(
      <>
      <div><span className={styles.terminal_domain}>{this._bioMetadata.props}</span>:<span className={styles.terminal_path}>~</span>$ ls links</div>
        <div className={styles.links_container}>
          {this._briefLinks.map((link) => {
            return(
              <a key={link.name} href={link.url} rel="noreferrer" target={link.noNewTab? "_self":"_blank"}>{link.name}</a>
            )
          })}
          <Link key="More" to="links" style={{color: this.props.theme}}>More➡</Link>
        </div>
      </>
    )
  }
}


export default IndexPage
export const Head: HeadFC = () => <SEO title="Home - Kreee's Home Page"/>
