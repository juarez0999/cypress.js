describe('Тестирование Покупки фото тренера', function () {
   it('Покупка фото', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('juarez09@mail.ru');
        cy.get('#password').type('Soccerpes11');
        cy.get('.auth__button').click();
     })
})