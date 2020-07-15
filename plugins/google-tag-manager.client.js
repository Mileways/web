function initGTM(w, d, s, l, i) {
  w[l] = w[l] || []

  w[l].push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  })

  const f = d.getElementsByTagName(s)[0]
  const j = d.createElement(s)
  const dl = l !== 'dataLayer' ? '&l=' + l : ''

  j.async = true
  j.defer = true
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
  f.parentNode.insertBefore(j, f)
}

export default ({ env }) => {
  if (!env.GTM_CONTAINER_ID) return

  window.addEventListener('load', () =>
    setTimeout(() => initGTM(window, document, 'script', 'dataLayer', env.GTM_CONTAINER_ID), 1000)
  )
}
