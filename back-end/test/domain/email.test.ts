import { Email } from "../../domain/model/email";

describe('Email Class', () => {
  test('Create email instance with provided values', () => {
    const email = new Email({
      id: 1,
      adres: 'test@example.com',
    });

    expect(email instanceof Email).toBe(true);
    expect(email.id).toBe(1);
    expect(email.adres).toBe('test@example.com');
  });

  test('Create email instance with default values', () => {
    const email = new Email({
      adres: 'default@example.com',
    });

    expect(email instanceof Email).toBe(true);
    expect(email.id).toBeUndefined();
    expect(email.adres).toBe('default@example.com');
  });

//   test('Empty email address should throw an error', () => {
//     const emailWithEmptyAdres = { id: 1, adres: '' };

//     expect(() => {
//         validate(emailWithEmptyAdres);
//     }).toThrow(Error("Email adres cannot be empty."));
// });

});




