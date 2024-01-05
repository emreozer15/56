import userDb from '../../domain/data-access/user.db';
import userService from '../../service/user.service';
import { User } from '../../domain/model/user';
import emailDb from '../../domain/data-access/email.db';
import { UserInput } from '../../types';
import { Email } from '../../domain/model/email';



describe('createUser function', () => {
    let emailDbMock: jest.SpyInstance;
    let userDbMock: jest.SpyInstance;
  
    beforeEach(() => {
      // Mocking getEmailById method of emailDb
      emailDbMock = jest.spyOn(emailDb, 'getEmailById');
      // Mocking checkUserAlreadyExists method of userDb
      userDbMock = jest.spyOn(userDb, 'checkUserAlreadyExists');
    });
  
    afterEach(() => {
      jest.restoreAllMocks();
    });
  
    test('Create user successfully', () => {
      // Mock getEmailById to return a valid email
      emailDbMock.mockReturnValue({ id: 1, adres: 'test@example.com' });
  
      // Mock checkUserAlreadyExists to return false (user doesn't exist)
      userDbMock.mockReturnValue(false);
  
      const userInput: UserInput = {
        name: 'JohnDoe',
        password: 'password123',
        email: { id: 1 }, // Assuming this id exists in the mocked emailDb
      };
  
      // Call createUser function
      const createdUser: User = userService.createUser(userInput);
  
      // Assertions
      expect(createdUser.name).toBe('JohnDoe');
      expect(createdUser.password).toBe('password123');
      expect(createdUser.email).toEqual({ id: 1, adres: 'test@example.com' });
      expect(userDb.createUser).toHaveBeenCalledWith(createdUser);
    });
  
    test('User already exists', () => {
      // Mock getEmailById to return a valid email
      emailDbMock.mockReturnValue({ id: 1, adres: 'test@example.com' });
  
      // Mock checkUserAlreadyExists to return true (user already exists)
      userDbMock.mockReturnValue(true);
  
      const userInput: UserInput = {
        name: 'JohnDoe',
        password: 'password123',
        email: { id: 1 }, // Assuming this id exists in the mocked emailDb
      };
  
      // Call createUser function and expect it to throw an error
      expect(() => {
        userService.createUser(userInput);
      }).toThrowError('User already exist.');
  
      // Verify createUser was not called
      expect(userDb.createUser).not.toHaveBeenCalled();
    });
  
  });