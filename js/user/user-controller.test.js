const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test('remove user that is not in userController', () => {
    let user = new User(9999, "NoExistente", "no@correo.com");
    // No se agrega el usuario
    expect(() => userController.remove(user)).not.toThrow();
    expect(userController.getUsers()).not.toContain(user);
});

test('find user by email - existing user', () => {
    let user = new User(5678, "Ana", "ana@generation.org");
    userController.add(user);
    let foundUser = userController.findByEmail("ana@generation.org");
    expect(foundUser).toEqual(user);
});

test('find user by email - non-existing user', () => {
    let foundUser = userController.findByEmail("noexiste@generation.org");
    expect(foundUser).toBeUndefined();
});

test('find user by ID - existing user', () => {
    let user = new User(7777, "Carlos", "carlos@generation.org");
    userController.add(user);
    let foundUser = userController.findById(7777);
    expect(foundUser).toEqual(user);
});
test('find user by ID - non-existing user', () => {
    let foundUser = userController.findById(8888);
    expect(foundUser).toBeUndefined();
});
