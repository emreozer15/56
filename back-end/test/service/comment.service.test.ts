import commentDb from "../../domain/data-access/comment.db";
import userDb from "../../domain/data-access/user.db";
import blogDb from "../../domain/data-access/blog.db";
import { Comment } from "../../domain/model/comment";
import commentService from "../../service/comment.service";
import { CommentInput } from "../../types";
import { UserInput } from "../../types";
import { BlogInput } from "../../types";


describe('createComment function', () => {
  const mockUser = { id: 1 }; // Mock user data
  const mockBlog = { id: 1 }; // Mock blog data

  beforeEach(() => {
    // Mock the functions used in the createComment function
    userDb.getUserById = jest.fn().mockReturnValueOnce(mockUser);
    blogDb.getBlogById = jest.fn().mockReturnValueOnce(mockBlog);
    commentDb.createComment = jest.fn().mockImplementation(comment => comment);
  });

  test('Valid comment creation', () => {
    const commentInput = {
      name: 'Valid Comment Name',
      date: new Date('2023-12-01T12:00:00Z'),
      user: { id: 1 } as UserInput, // Mock user input
      blog: { id: 1 } as BlogInput, // Mock blog input
    };

    const createdComment = commentService.createComment(commentInput);

    expect(userDb.getUserById).toHaveBeenCalledWith({ id: 1 });
    expect(blogDb.getBlogById).toHaveBeenCalledWith({ id: 1 });
    expect(commentDb.createComment).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'Valid Comment Name',
        date: '2023-12-01T12:00:00Z',
        user: mockUser,
        blog: mockBlog,
      })
    );
    expect(createdComment).toBeInstanceOf(Comment);
  });

  test('Empty comment name should throw an error', () => {
    const commentInput = {
      name: '', // Empty name
      date: new Date('2023-12-01T12:00:00Z'),
      user: { id: 1 } as UserInput,
      blog: { id: 1 } as BlogInput,
    };

    expect(() => {
      commentService.createComment(commentInput);
    }).toThrow(Error('Comment name cannot be empty.'));
  });

  test('Invalid date format should throw an error', () => {
    const commentInput = {
      name: 'Invalid Date Comment',
      date: new Date('InvalidDate'), // Invalid date format
      user: { id: 1 } as UserInput,
      blog: { id: 1 } as BlogInput,
    };

    expect(() => {
      commentService.createComment(commentInput);
    }).toThrow(Error('Invalid comment date format.'));
  });

  test('Invalid user for the comment should throw an error', () => {
    userDb.getUserById = jest.fn().mockReturnValueOnce(null); // User not found

    const commentInput = {
      name: 'Invalid User Comment',
      date: new Date('2023-12-01T12:00:00Z'),
      user: { id: 1 } as UserInput,
      blog: { id: 1 } as BlogInput,
    };

    expect(() => {
      commentService.createComment(commentInput);
    }).toThrow(Error('Invalid user for the comment.'));
  });

  test('Invalid blog for the comment should throw an error', () => {
    blogDb.getBlogById = jest.fn().mockReturnValueOnce(null); // Blog not found

    const commentInput = {
      name: 'Invalid Blog Comment',
      date: new Date('2023-12-01T12:00:00Z'),
      user: { id: 1 } as UserInput,
      blog: { id: 1 } as BlogInput,
    };

    expect(() => {
      commentService.createComment(commentInput);
    }).toThrow(Error('Invalid blog for the comment.'));
  });
});
