const compareUsers = require('../algo');

user1 = { name: 'dede', age: '16', gender: 'man', wish: 'women' };
user2 = { name: 'lulu', age: '16', gender: 'women', wish: 'man' };

test('test compare user func', () => {
  expect(compareUsers(user1, user2)).toBe(true)

});
test('test compare user func isth paulette younger', () => {
    expect(compareUsers(user1, { name: 'Paulette', age: '15', gender: 'women', wish: 'man' })).toBe(true)
  
  });
  test('test compare user func with Janne older', () => {
    expect(compareUsers(user1, { name: 'Jeanne', age: '19', gender: 'women', wish: 'man' })).toBe(true)
  
  });
  test('test compare user func with iris too older', () => {
    expect(compareUsers(user1, { name: 'Jeanne', age: '22', gender: 'women', wish: 'man' })).toBe(false)
  
  });

  test('test compare user func with same user', () => {
    expect(compareUsers(user1, user1)).toBe(false)
  });

  test('test compare user func with same user', () => {
    expect(compareUsers(user1, { name: 'Jeanne', age: '17', gender: 'women', wish: 'man', idRoom: 'dudu' })).toBe(true)
  });