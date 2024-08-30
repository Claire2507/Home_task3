const axios = require('axios');

describe('Adding a new Pet', () => {
  it('should allow adding a new Pet', async () => {
    const newPetData = {
      id: 160,
      category: {
        id: 0,
        name: "rats"
      },
      name: "Yohanes",
      photoUrls: [
        "https://i.pinimg.com/originals/2d/5d/18/2d5d189c16cfcc3bcc7004b67c5f7d73.jpg"
      ],
      tags: [
        {
          id: 0,
          name: "ttt"
        }
      ],
      status: "available"
    };

    const response = await axios.post('https://petstore.swagger.io/v2/pet', newPetData);

    expect(response.status).to.equal(200);

    expect(response.data).to.have.property('name', newPetData.name);
    expect(response.data).to.have.property('status', newPetData.status);
    expect(response.data.category).to.have.property('name', newPetData.category.name);
    expect(response.data.tags[0]).to.have.property('name', newPetData.tags[0].name);

    expect(response.data.id).to.not.equal(0); 
    console.log('Pet created with photo:', response.data);
  });
});