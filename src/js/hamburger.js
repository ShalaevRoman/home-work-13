export function initHamburger() {
  const hamburger = document.querySelector('.header__hamburger')
  const nav       = document.querySelector('.header__nav')
  const overlay   = document.querySelector('.header__overlay')

  if (!hamburger || !nav || !overlay) return

  const open = () => {
    hamburger.classList.add('is-active')
    hamburger.setAttribute('aria-expanded', 'true')
    nav.classList.add('is-open')
    overlay.classList.add('is-visible')
    document.body.style.overflow = 'hidden'
  }

  const close = () => {
    hamburger.classList.remove('is-active')
    hamburger.setAttribute('aria-expanded', 'false')
    nav.classList.remove('is-open')
    overlay.classList.remove('is-visible')
    document.body.style.overflow = ''
  }

  hamburger.addEventListener('click', () => {
    nav.classList.contains('is-open') ? close() : open()
  })

  overlay.addEventListener('click', close)

  document.querySelectorAll('.header__nav-link').forEach(link => {
    link.addEventListener('click', close)
  })
}