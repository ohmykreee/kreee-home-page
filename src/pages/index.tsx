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
  name: string
  job: string
  species: string
  mail: string
  learning: string
  cpu: string
  gpu: string
  signs: string
}

class BriefBio extends React.Component<{theme: string | undefined}> {
  constructor(props: {theme: string | undefined}) {
    super(props)
    this.bioRef = React.createRef()
  }

  private _themeColor: string[] = useThemeColor.getAllColors()
  private _bioMetadata: BioMetadata = BioData
  private _typedText: string = `
  <p><span class="theme_colored_text">Brief Introduction</span><br />
  ------------------<br />
  <span class="theme_colored_text">Name: </span>${this._bioMetadata.name}<br />
  <span class="theme_colored_text">Job: </span>${this._bioMetadata.job}<br />
  <span class="theme_colored_text">Species: </span>${this._bioMetadata.species}<br />
  <span class="theme_colored_text">Mail: </span><a href="mailto:${this._bioMetadata.mail}">${this._bioMetadata.mail}</a><br />
  <span class="theme_colored_text">Learning: </span>${this._bioMetadata.learning}<br />
  <span class="theme_colored_text">CPU: </span>${this._bioMetadata.cpu}<br />
  <span class="theme_colored_text">GPU: </span>${this._bioMetadata.gpu}<br />
  <span style="letter-spacing:-5px;font-weight:700;">${this._themeColor.map(color => `<span style="color:${color};">▇▇</span>`).join("")}</span></p>
  `
  private bioRef: React.RefObject<HTMLDivElement>

  updateColor(): void {
    const style = document.createElement("style")
    style.innerHTML = `.theme_colored_text{color: ${this.props.theme};}`
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
      <div><span style={{color: this._themeColor[1]}}>kreee@ohmykreee.top</span>:<span style={{color: this._themeColor[2]}}>~</span>$ info</div>
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
            cursor: ""
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

  private _themeColor: string[] = useThemeColor.getAllColors()
  private _briefLinks: LinksMetadata[] = LinksData.slice(0, 4)

  render(): React.ReactNode {
    return(
      <div className={styles.links_container}>
        <div><span style={{color: this._themeColor[1]}}>kreee@ohmykreee.top</span>:<span style={{color: this._themeColor[2]}}>~</span>$ ls links</div>
        <div className={styles.link_list}>
          {this._briefLinks.map((link) => {
            return(
              <a key={link.name} href={link.url} rel="noreferrer" target={link.noNewTab? "_self":"_blank"}>{link.name}</a>
            )
          })}
          <Link key="More" to="links" style={{color: this.props.theme}}>More➡</Link>
        </div>
      </div>
    )
  }
}


export default IndexPage
export const Head: HeadFC = () => <SEO title="Home - Kreee's Home Page"/>
