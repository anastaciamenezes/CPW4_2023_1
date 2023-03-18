import FontStyles from '../../assets/fonts/fonts'
import ColorPanel from '.'

describe('<ColorPanel />', () => {
  it('should render correct color', () => {
    const title = 'App />'
    const color = 255
    cy.mount(
      <>
        <FontStyles />
        
        <ColorPanel title={'<App />'} red={0} green={0} blue={0} alpha={0} />
      </>
    )
    cy.get('[data-cy="color-title"]').should('have.text', 'title')
        
  })
})