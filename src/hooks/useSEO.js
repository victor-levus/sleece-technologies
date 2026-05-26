import { useEffect } from 'react'

const SITE_NAME = 'Sleece Technologies Limited'
const SITE_URL = 'https://sleecetechnologies.com.ng'
const DEFAULT_DESC =
  'Sleece Technologies Limited delivers cutting-edge ICT infrastructure, power solutions, networking, and security systems in Nigeria.'

function setMetaTag(attrName, attrValue, content) {
  let el = document.querySelector(`meta[${attrName}="${attrValue}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attrName, attrValue)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function useSEO({ title, description, path = '' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
    const desc = description || DEFAULT_DESC
    const url = `${SITE_URL}${path}`

    document.title = fullTitle
    setMetaTag('name', 'description', desc)
    setMetaTag('property', 'og:title', fullTitle)
    setMetaTag('property', 'og:description', desc)
    setMetaTag('property', 'og:url', url)
    setMetaTag('property', 'og:type', 'website')
    setMetaTag('property', 'og:site_name', SITE_NAME)
  }, [title, description, path])
}
