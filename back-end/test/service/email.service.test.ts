import emailService from '../../service/email.service';
import { Email } from '../../domain/model/email';
import emailDb from '../../domain/data-access/email.db';


jest.mock('../domain/data-access/email.db', () => ({
  createEmail: jest.fn(),
}));

describe('createEmail function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

//   test('Creating email with valid input should return an email', () => {
//     const emailInput = { id: 1, adres: 'test@example.com' };
//     const expectedEmail = new Email(emailInput);

//     emailDb.createEmail.mockReturnValue(expectedEmail);

//     const result = emailService.createEmail(emailInput);

//     expect(emailDb.createEmail).toHaveBeenCalledWith(expectedEmail);
//     expect(result).toEqual(expectedEmail);
//   });

  test('Creating email with empty address should throw an error', () => {
    const emailInput = { id: 1, adres: '' };

    expect(() => {
      emailService.createEmail(emailInput);
    }).toThrow(Error('Email address cannot be empty.'));

    expect(emailDb.createEmail).not.toHaveBeenCalled();
  });
});
