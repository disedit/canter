export const useLinks = () => {
  return {
    internalLink: (link) => {
      let cachedUrl
      let prefix = '/'
      let append
      if (typeof link === 'object') {
        cachedUrl = link.cached_url
        prefix = (link.linktype === 'url') ? '' : '/'
        append = (link.anchor) ? `#${link.anchor}` : ''
      } else {
        cachedUrl = link
      }
      if (!cachedUrl) return ''
      return cachedUrl.startsWith('/') ? cachedUrl : prefix + cachedUrl + append
    },
    target: (link) => {
      return link.target
    }
  }
}
