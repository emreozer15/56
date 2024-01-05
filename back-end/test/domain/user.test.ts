import { User } from '../../domain/model/user';
import { Blog } from '../../domain/model/blog';
import { Comment } from '../../domain/model/comment';
import { Email } from '../../domain/model/email';


test('Create user instance with provided values', () => {
  const email = new Email({ id: 1, adres: 'john@example.com' });

  const user = new User({
    id: 1,
    name: 'John Doe',
    password: 'password123',
    comments: [],
    blogs: [],
    email: email,
  });

  expect(user instanceof User).toBe(true);
  expect(user.id).toBe(1);
  expect(user.name).toBe('John Doe');
  expect(user.password).toBe('password123');
  expect(user.comments).toEqual([]);
  expect(user.blogs).toEqual([]);
  expect(user.email).toBe(email);
});

test('Create user instance with default values for comments and blogs', () => {
  const email = new Email({ id: 2, adres: 'jane@example.com' });

  const user = new User({
    id: 1,
    name: 'Jane Smith',
    password: 'qwerty',
    comments: [],
    blogs: [],
    email: email,
  });

  expect(user instanceof User).toBe(true);
  expect(user.id).toBeUndefined();
  expect(user.name).toBe('Jane Smith');
  expect(user.password).toBe('qwerty');
  expect(user.comments).toEqual([]);
  expect(user.blogs).toEqual([]);
  expect(user.email).toBe(email);
});

// test('Valid user instance should pass validation', () => {
//   const email = new Email({ id: 2, adres: 'jane@example.com' });

//   const user = new User({
//     id: 1,
//     name: 'John Doe',
//     password: 'validPassword',
//     comments: [],
//     blogs: [],
//     email: email,
//   });

//   expect(() => {
//     user.validate();
//   }).not.toThrow();
// });

// test('Empty name should throw an error', () => {
//   const email = new Email({ id: 2, adres: 'jane@example.com' });

//   const user = new User({
//     id: 1,
//     name: '', // Empty name
//     password: 'validPassword',
//     comments: [],
//     blogs: [],
//     email: email,
//   });

//   expect(() => {
//     user.validate();
//   }).toThrow(Error('Name cannot be empty.'));
// });

// test('Password less than 8 characters should throw an error', () => {
//   const email = new Email({ id: 2, adres: 'jane@example.com' });

//   const user = new User({
//     id: 1,
//     name: 'John Doe',
//     password: 'short',
//     comments: [],
//     blogs: [],
//     email: email,
//   });

//   expect(() => {
//     user.validate();
//   }).toThrow(Error('Password must be at least 8 characters long.'));
// });

// test('Empty email should throw an error', () => {
//   const email = new Email({ id: 2, adres: 'jane@example.com' });

//   const user = new User({
//     id: 1,
//     name: 'John Doe',
//     password: 'validPassword',
//     comments: [],
//     blogs: [],
//     email: null, // Empty email
//   });

//   expect(() => {
//     user.validate();
//   }).toThrow(Error('Email cannot be empty.'));
// });


