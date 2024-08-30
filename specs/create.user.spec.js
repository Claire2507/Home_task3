const axios = require('axios');

describe(' User Creation', () => {
  it('allows creating a User', async () => {
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

    const response = await axios.post('https://petstore.swagger.io/v2/user', userData);

    expect(response.status).to.equal(200);

    const getResponse = await axios.get(`https://petstore.swagger.io/v2/user/${userData.username}`);
    expect(getResponse.status).to.eq(200);
  });
});