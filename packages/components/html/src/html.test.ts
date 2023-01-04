import { describe, it, expect } from 'vitest'
import html from './html'
import { render } from '../../../utils/vue-testing-library'

describe('html', () => {
  it('should render', async () => {
    const { container } = render(html)
    expect(container.innerHTML).toBe('<html lang="en"></html>')
  })

  it('should render with lang', async () => {
    const { container } = render(html, { props: { lang: 'fr' } })
    expect(container.innerHTML).toBe('<html lang="fr"></html>')
  })

  it('should render with children', async () => {
    const { container } = render(html, { slots: { default: 'Hello' } })
    expect(container.innerHTML).toBe('<html lang="en">Hello</html>')
  })

  it('should render with lang and children', async () => {
    const { container } = render(html, {
      props: { lang: 'fr' },
      slots: { default: 'Hello' },
    })
    expect(container.innerHTML).toBe('<html lang="fr">Hello</html>')
  })
})