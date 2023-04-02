import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "./footer.module.scss"

interface footerMetadata {
  siteMetadata: {
    sourceCode: string
  }
  buildTime: string
}

export const Footer = (): JSX.Element => {
  const footerMetadata: footerMetadata = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          sourceCode
        }
        buildTime
      }
    }
  `).site

  const buildYear: number = new Date(footerMetadata.buildTime).getFullYear()
  const sourceCode: string = footerMetadata.siteMetadata.sourceCode
  

  return (
    <div className={styles.footer}>
      <p>Kreee Jiang powered 2021 - {buildYear}.<br />
      <a href={sourceCode} rel="noreferrer" target="_blank">Source Code</a></p>
    </div>
  )
}