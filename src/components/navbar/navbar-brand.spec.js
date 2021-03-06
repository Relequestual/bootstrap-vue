import NavbarBrand from './navbar-brand'
import { mount } from '@vue/test-utils'

describe('navbar-brand', async () => {
  it('default has tag "div"', async () => {
    const wrapper = mount(NavbarBrand)
    expect(wrapper.is('div')).toBe(true)
  })

  it('default has class "navbar-brand"', async () => {
    const wrapper = mount(NavbarBrand)
    expect(wrapper.classes()).toContain('navbar-brand')
    expect(wrapper.classes().length).toBe(1)
  })

  it('accepts custom tag', async () => {
    const wrapper = mount(NavbarBrand, {
      context: {
        props: { tag: 'span' }
      }
    })
    expect(wrapper.is('span')).toBe(true)
    expect(wrapper.classes()).toContain('navbar-brand')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders link when href set', async () => {
    const wrapper = mount(NavbarBrand, {
      context: {
        props: { href: '#foo' }
      }
    })
    expect(wrapper.is('a')).toBe(true)
    expect(wrapper.attributes('href')).toBe('#foo')
    expect(wrapper.classes()).toContain('navbar-brand')
    expect(wrapper.classes().length).toBe(1)
  })
})
