const puppeteer = require('puppeteer');

    async function fillForm(profile, url) {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();

      await page.goto(url);

      // Fill out form fields
      await fillField(page, '#firstName', profile.firstName);
      await fillField(page, '#middleName', profile.middleName);
      await fillField(page, '#lastName', profile.lastName);
      await fillField(page, '#phoneNumber', profile.phoneNumber);
      await fillField(page, '#address', profile.address);
      await fillField(page, '#street', profile.street);
      await fillField(page, '#city', profile.city);
      await fillField(page, '#state', profile.state);
      await fillField(page, '#zip', profile.zip);
      await fillField(page, '#dob', profile.dob);
      await fillField(page, '#ssn', profile.ssn);
      await fillField(page, '#email', profile.email);
      await fillField(page, '#username', profile.username);
      await fillField(page, '#password', profile.password);

      // Add more fields as needed

      // Example: Clicking a submit button
      // await page.click('#submitButton');

      // await browser.close();
    }

    async function fillField(page, selector, value) {
      try {
        await page.type(selector, value);
      } catch (error) {
        console.error(`Could not fill field ${selector}: ${error}`);
      }
    }

    // Example profile
    const profile = {
      firstName: 'John',
      middleName: 'M',
      lastName: 'Doe',
      phoneNumber: '123-456-7890',
      address: '123 Main St',
      street: 'Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '91234',
      dob: '01/01/1990',
      ssn: '000-00-0000',
      email: 'john.doe@example.com',
      username: 'johndoe',
      password: 'password123',
    };

    // Example URL
    const url = 'https://example.com/form';

    fillForm(profile, url);
