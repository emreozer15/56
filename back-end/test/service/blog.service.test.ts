// import { Blog } from '../../domain/model/blog';
// import blogService from '../../service/blog.service';
// import { User } from '../../domain/model/user';
// import { Category } from '../../domain/model/category';
// import { BlogInput } from '../../types';
// import { Email } from '../../domain/model/email';

// // Mock user and category database functions for testing
// const userDb = {
//   getUserById: jest.fn().mockReturnValue(new User({ id: 1, name: "John Doe", password: "password123",   comments: null, blogs: null, email: new Email({id: 1, adres: "example@example.com"})})),
// };

// const categoryDb = {
//   getCategoryById: jest.fn().mockReturnValue(new Category({id: 1, name: 'Technology', blogs: [new Blog({ id: 1, title: 'Blog 1', caption: 'Caption 1', user: null, comments: [], category: null }), new Blog({ id: 2, title: 'Blog 2', caption: 'Caption 2', user: null, comments: [], category: null })]})),
// };

// // Mock blog database functions for testing
// const blogDb = {
//   checkBlogAlreadyExists: jest.fn(),
//   createBlog: jest.fn(),
// };

// describe('createBlog function', () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   test('Creates a new blog successfully', () => {
//     const blogInput: BlogInput = {
//       title: 'New Blog',
//       caption: 'New Blog Caption',
//       user: { id: 1 },
//       category: { id: 1 },
//     };

//     blogDb.checkBlogAlreadyExists.mockReturnValue(false);
//     blogDb.createBlog.mockReturnValue(new Blog({ ...blogInput, comments: [] }));

//     const result = blogService.createBlog(blogInput);

//     expect(blogDb.checkBlogAlreadyExists).toHaveBeenCalledWith(
//       'New Blog',
//       'New Blog Caption',
//       expect.any(User),
//       expect.any(Category)
//     );
//     expect(result).toBeInstanceOf(Blog);
//     expect(blogDb.createBlog).toHaveBeenCalledWith(expect.any(Blog));
//   });

//   test('Throws an error if the blog already exists', () => {
//     const blogInput: BlogInput = {
//       title: 'Existing Blog',
//       caption: 'Existing Blog Caption',
//       user: { id: 1 },
//       category: { id: 1 },
//     };

//     blogDb.checkBlogAlreadyExists.mockReturnValue(true);

//     expect(() => {
//       blogService.createBlog(blogInput);
//     }).toThrow(Error('Blog already exist.'));
//   });

//   // Add more test cases to cover other scenarios (validation, edge cases, etc.)...
// });
