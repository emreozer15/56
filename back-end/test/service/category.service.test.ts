import categoryDb from '../../domain/data-access/category.db';
import { Category } from '../../domain/model/category';
import { CategoryInput } from '../../types';
import { Blog } from '../../domain/model/blog';
import categoryService from '../../service/category.service';

// Mock categoryDB.createCategory to simulate its behavior
categoryDb.createCategory = jest.fn((category: Category) => {
  // Mocking the behavior of creating a category
  return category;
});

// Import the createCategory function

describe('createCategory Function', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear all mock function calls after each test
  });

  test('Creating a valid category should return the created category', () => {
    const categoryInput: CategoryInput = {
      name: 'Technology',
    };

    const createdCategory = categoryService.createCategory(categoryInput);

    expect(createdCategory).toBeInstanceOf(Category);
    expect(createdCategory.name).toBe('Technology');
    expect(categoryDb.createCategory).toHaveBeenCalledWith(expect.any(Category));
  });

  test('Creating a category with an empty name should throw an error', () => {
    const categoryInput: CategoryInput = {
      name: '', // Empty name
    };

    expect(() => {
      categoryService.createCategory(categoryInput);
    }).toThrowError('Category name cannot be empty.');

    expect(categoryDb.createCategory).not.toHaveBeenCalled(); // Ensure createCategory is not called
  });

  // You can add more test cases to cover other scenarios as needed...
});
