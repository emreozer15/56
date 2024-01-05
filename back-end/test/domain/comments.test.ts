import { Comment } from "../../domain/model/comment";
import { User } from "../../domain/model/user";
import { Blog } from "../../domain/model/blog";
import { Email } from "../../domain/model/email";


// Test Comment class
describe('Comment Class', () => {  
  const email = new Email({id: 1, adres: "example@example.com"});
  const user = new User({ id: 1, name: "John Doe", password: "password123",   comments: null, blogs: null, email: email});

  // Create Blog instances
  const blog1 = new Blog({ id: 1, title: 'Blog 1', caption: 'Caption 1', user: user, comments: [], category: null });
  const blog2 = new Blog({ id: 2, title: 'Blog 2', caption: 'Caption 2', user: user, comments: [], category: null });

  test('Create comment instance with provided values', () => {
    const comment = new Comment({
      id: 1,
      name: 'Sample Comment 1',
      date: new Date(),
      user: user,
      blog: blog1,
    });

    expect(comment instanceof Comment).toBe(true);
    expect(comment.id).toBe(1);
    expect(comment.name).toBe('Sample Comment 1');
    // Add more assertions as needed for other properties
  });

  test('Create comment instance with default values', () => {
    const comment = new Comment({
      name: 'Sample Comment 2',
      date: new Date(),
      user: user,
      blog: blog2,
    });

    expect(comment instanceof Comment).toBe(true);
    expect(comment.id).toBeUndefined();
    expect(comment.name).toBe('Sample Comment 2');
    // Add more assertions as needed for other properties
  });

  // test('Valid comment instance should pass validation', () => {
  //   const validComment = new Comment({
  //     id: 1,
  //     name: 'Sample Comment',
  //     date: new Date(),
  //     user: user,
  //     blog: blog1,
  //   });

  //   expect(() => {
  //     validComment.validate();
  //   }).not.toThrow();
  // });

  // test('Empty name should throw an error', () => {
  //   const commentEmptyName = new Comment({
  //     id: 1,
  //     name: '', // Empty name
  //     date: new Date(),
  //     user: user,
  //     blog: blog1,
  //   });

  //   expect(() => {
  //     commentEmptyName.validate();
  //   }).toThrow(Error('Name cannot be empty.'));
  // });

  // test('Invalid date should throw an error', () => {
  //   const commentInvalidDate = new Comment({
  //     id: 1,
  //     name: 'Sample Comment',
  //     date: null, // Invalid date
  //     user: user,
  //     blog: blog1,
  //   });

  //   expect(() => {
  //     commentInvalidDate.validate();
  //   }).toThrow(Error('Date is invalid.'));
  // });

  // test('Empty user should throw an error', () => {
  //   const commentEmptyUser = new Comment({
  //     id: 1,
  //     name: 'Sample Comment',
  //     date: new Date(),
  //     user: null, // Empty user
  //     blog: blog1,
  //   });

  //   expect(() => {
  //     commentEmptyUser.validate();
  //   }).toThrow(Error('User cannot be empty.'));
  // });

  // test('Empty blog should throw an error', () => {
  //   const commentEmptyBlog = new Comment({
  //     id: 1,
  //     name: 'Sample Comment',
  //     date: new Date(),
  //     user: user,
  //     blog: null, // Empty blog
  //   });

  //   expect(() => {
  //     commentEmptyBlog.validate();
  //   }).toThrow(Error('Blog cannot be empty.'));
  // });


});
