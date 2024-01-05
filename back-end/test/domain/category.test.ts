import { User } from '../../domain/model/user';
import { Blog } from '../../domain/model/blog';
import { Comment } from '../../domain/model/comment';
import { Email } from '../../domain/model/email';
import { Category } from '../../domain/model/category';


describe('Category Class', () => {
  test('Create category instance with provided values', () => {
    const blog1 = new Blog({ id: 1, title: 'Blog 1', caption: 'Caption 1', user: null, comments: [], category: null });

    const blog2 = new Blog({ id: 2, title: 'Blog 2', caption: 'Caption 2', user: null, comments: [], category: null });

    const category = new Category({
      id: 1,
      name: 'Technology',
      blogs: [blog1, blog2],
    });

    expect(category instanceof Category).toBe(true);
    expect(category.id).toBe(1);
    expect(category.name).toBe('Technology');
    expect(category.blogs).toEqual([blog1, blog2]);
  });

  test('Create category instance with default values', () => {
    const category = new Category({
      name: 'General',
      blogs: [],
    });

    expect(category instanceof Category).toBe(true);
    expect(category.id).toBeUndefined();
    expect(category.name).toBe('General');
    expect(category.blogs).toEqual([]);
  });

  // test('Valid category instance should pass validation', () => {
  //   const blog = new Blog({ id: 1, title: 'Sample Title', caption: 'Sample Caption', user: null, comments: [], category: null });
  //   const category = new Category({ id: 1, name: 'Technology', blogs: [blog] });

  //   expect(() => {
  //     category.validate();
  //   }).not.toThrow();
  // });

  // test('Empty name should throw an error', () => {
  //   const category = new Category({ id: 1, name: '', blogs: [] });

  //   expect(() => {
  //     category.validate();
  //   }).toThrow(Error('Category name cannot be empty.'));
  // });

  // test('No blogs associated should throw an error', () => {
  //   const category = new Category({ id: 1, name: 'Technology', blogs: [] });

  //   expect(() => {
  //     category.validate();
  //   }).toThrow(Error('At least one blog should be associated with the category.'));
  // });



});
