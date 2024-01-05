import { Blog } from '../../domain/model/blog';
import { User } from '../../domain/model/user';
import { Comment } from '../../domain/model/comment';
import { Category } from '../../domain/model/category';
import { Email } from '../../domain/model/email';


describe('Blog Class', () => {
  const email = new Email({id: 1, adres: "example@example.com"});

    const user = new User({ id: 1, name: "John Doe", password: "password123",   comments: null, blogs: null, email: email});
    const blog1 = new Blog({ id: 1, title: 'Blog 1', caption: 'Caption 1', user: null, comments: [], category: null });
    const blog2 = new Blog({ id: 2, title: 'Blog 2', caption: 'Caption 2', user: null, comments: [], category: null });
    const category = new Category({id: 1, name: 'Technology', blogs: [blog1, blog2]});
  const comment1 = new Comment({id: 1, name: 'Sample Comment 1', date: new Date(), user: user, blog: null});
  const comment2 = new Comment({id: 1, name: 'Sample Comment 1', date: new Date(), user: user, blog: null});


  test('Create blog instance with provided values', () => {
    const blog = new Blog({
      id: 1,
      title: 'Sample Blog Title',
      caption: 'Sample Blog Caption',
      user: user,
      comments: [comment1, comment2],
      category: category,
    });

    expect(blog instanceof Blog).toBe(true);
    expect(blog.id).toBe(1);
    expect(blog.title).toBe('Sample Blog Title');
    expect(blog.caption).toBe('Sample Blog Caption');
    // Add more assertions as needed for other properties
  });

  test('Create blog instance with default values', () => {
    const blog = new Blog({
      title: 'Default Blog Title',
      caption: 'Default Blog Caption',
      user: user,
      comments: [],
      category: category,
    });

    expect(blog instanceof Blog).toBe(true);
    expect(blog.id).toBeUndefined();
    expect(blog.title).toBe('Default Blog Title');
    expect(blog.caption).toBe('Default Blog Caption');
    // Add more assertions as needed for other properties
  });


  // test('Valid blog instance should pass validation', () => {
  //   const blog = new Blog({
  //     id: 1,
  //     title: 'Sample Blog Title',
  //     caption: 'Sample Blog Caption',
  //     user: user,
  //     comments: [comment],
  //     category: category,
  //   });

  //   expect(() => {
  //     blog.validate();
  //   }).not.toThrow();
  // });

  // test('Empty title should throw an error', () => {
  //   const blog = new Blog({
  //     id: 1,
  //     title: '', // Empty title
  //     caption: 'Sample Blog Caption',
  //     user: user,
  //     comments: [comment],
  //     category: category,
  //   });

  //   expect(() => {
  //     blog.validate();
  //   }).toThrow(Error('Title cannot be empty.'));
  // });

  // test('Empty caption should throw an error', () => {
  //   const blog = new Blog({
  //     id: 1,
  //     title: 'Sample Blog Title',
  //     caption: '', // Empty caption
  //     user: user,
  //     comments: [comment],
  //     category: category,
  //   });

  //   expect(() => {
  //     blog.validate();
  //   }).toThrow(Error('Caption cannot be empty.'));
  // });




});
