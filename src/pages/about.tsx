import "../styles/global.scss"
import * as styles from "../styles/article.module.scss"
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { SEO } from "../components/seo"
import { Terminal } from "../components/terminal"
import { ThemeStateContext } from "../components/base"
import { Footer } from "../components/footer"
import About from "../mdx/about.mdx"


const AboutPage: React.FC<PageProps> = () => {
  return (
    <>
    <Terminal title="About"><ThemeStateContext.Consumer>
      {theme => {
        return (
          <Article theme={theme} />
        )
      }}
    </ThemeStateContext.Consumer></Terminal>
    <Footer />
    </>
  )
}

class Article extends React.Component<{theme: string | undefined}> {
  constructor(props: {theme: string | undefined}) {
    super(props)
    this.containerRef = React.createRef()
  }

  private containerRef: React.RefObject<HTMLDivElement>

  updateColor(): void {
    const style = document.createElement("style")
    style.innerHTML = `.${styles.container} b{color: ${this.props.theme};} .${styles.container} a{color:${this.props.theme};}`
    Array.prototype.slice.call(this.containerRef.current?.getElementsByTagName("style")).forEach((item) => {
      this.containerRef.current?.removeChild(item)
    }) // delete old style tag to prevent memory leaks.
    this.containerRef.current?.appendChild(style)
  }

  componentDidMount(): void {
    this.updateColor()
  }

  componentDidUpdate(prevProps: Readonly<{ theme: string | undefined }>, prevState: Readonly<{}>, snapshot?: any): void {
    this.updateColor()
  }

  render(): React.ReactNode {
    return(
      <div className={styles.container} ref={this.containerRef}>
        <About />
      </div>
    )
  }

}


export default AboutPage
export const Head: HeadFC = () => <SEO title="About - Kreee's Home Page"/>