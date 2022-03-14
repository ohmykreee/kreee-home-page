import Head from 'next/head'
import { siteconf } from '../site-config'
import { useRouter } from 'next/router'

export const Header = ({title, description}) => {
  const router = useRouter()

  return(
    <Head>
      <title>{title}</title>

      <meta name="siteBaseUrl" content={siteconf.baseurl} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Kreee" />
      <meta name="description" content={description? description : "Home page of ohmykreee.top"} />
      <meta name="keywords" content="kreee,personal,responsive,font awesome,react" />
      <meta name="title" content={title} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description? description : "Home page of ohmykreee.top"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description? description : "Home page of ohmykreee.top"} />
      <meta property="og:image" content="/avatar.jpg" />
      <meta property="og:url" content={"https://www.ohmykreee.top" + router.pathname} />
      <meta property="og:site_name" content="Home Page - Kreee" />
      <meta property="og:type" content="website" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#603cba" />
      <meta name="theme-color" content="#ffffff" />
    </Head>)
}