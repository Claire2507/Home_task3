const axios = require('axios');

describe(' User List Creation', () => {
// Define the data for a list of users to be created
  it('allows creating a List of users', async () => {
    const userData = [
    {
      id: 0,
      username: "Svet",
      firstName: "Testk",
      lastName: "Userk",
      email: "testuser2@example.com",
      password: "qwerty",
      phone: "2565656",
      userStatus: 0
    }
];
    // Create the list of users
    const response = await axios.post('https://petstore.swagger.io/v2/user/createWithList', userData);
    // Verify that the response status is 200
    expect(response.status).to.equal(200);
    // Make GET request to retrieve the created user by username
    const getResponse = await axios.get(`https://petstore.swagger.io/v2/user/${userData[0].username}`);
    // Verify that the response status is 200
    expect(getResponse.status).to.eq(200);
  });
});