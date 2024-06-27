const { addUser, createUser, userExist } = require('../db')

user1 = { name: 'Celestin', age: '15', gender: 'man', wish: 'women', roomId: 123 };
user2 = { name: 'juliette', age: '15', gender: 'women', wish: 'man', roomId : 456 };
user3 = { name: 'Pierre', age: '15', gender: 'man', wish: 'women' };


test('test comparaison', () => {
    toto = true;
    expect(!toto).toBeFalsy();
    tutu = false;
    expect(!tutu).toBeTruthy();
    tata = undefined;
    expect(!tata).toBeFalsy();
});

test('test create/exist func', () => {
    expect(userExist(user1)).toBeFalsy();
    createUser(user1);
    expect(userExist(user2)).toBeFalsy();

    createUser(user2);
    expect(userExist(user1)).toBeTruthy();
    expect(userExist(user2)).toBeTruthy();

});

// test('test add user func', () => {
//     roomId1 = addUser({ name: 'Celestin', age: '15', gender: 'man', wish: 'women' });
//     roomId2 = addUser({ name: 'Camille', age: '15', gender: 'women', wish: 'man' });
//     expect(roomId1).toBe(roomId2);

// });