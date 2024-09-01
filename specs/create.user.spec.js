const axios = require('axios');

describe(' User Creation', () => {
  it('allows creating a User', async () => {
    // Define the data for the user to be created

    const userData = {
      id: 0,
      username: "Claire",
      firstName: "Test",
      lastName: "User",
      email: "testuser@example.com",
      password: "password123",
      phone: "123-456-7890",
      userStatus: 0
    };
    // Create the user
    const response = await axios.post('https://petstore.swagger.io/v2/user', userData);
    // Check that the response status is 200
    expect(response.status).to.equal(200);
    // Make a GET request to retrieve the created user by username
    const getResponse = await axios.get(`https://petstore.swagger.io/v2/user/${userData.username}`);
    // Check that the response status is 200
    expect(getResponse.status).to.eq(200);
  });
});