const axios = require('axios');

describe(' User List Creation', () => {
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

    const response = await axios.post('https://petstore.swagger.io/v2/user/createWithList', userData);

    expect(response.status).to.equal(200);

    const getResponse = await axios.get(`https://petstore.swagger.io/v2/user/${userData[0].username}`);
    expect(getResponse.status).to.eq(200);
  });
});