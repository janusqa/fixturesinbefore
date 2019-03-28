describe('page', () => {

  before(function () {
    cy.fixture('example.json').as('example')

  });

  beforeEach(function () {
    // do nothing
  });

  it('works', function () {
    cy.task('log', this.example.name)

  })
  it('does not work', function () {
    cy.task('log', this.example.name)
  })
})
