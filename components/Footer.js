import { siteconf } from "../site-config"

export const Footer = ({text}) => {
  return(
    <footer>
      <a href={siteconf.footer.url}>{text? text : siteconf.footer.text}</a>
    </footer>)
}