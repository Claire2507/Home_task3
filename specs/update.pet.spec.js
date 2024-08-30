const axios = require('axios');

describe('Pet Data Update', () => {
  it('allows updating Pet’s image, name and status', async () => {
  
    const petData = {
      id: 160,
      category: {
        id: 0,
        name: "rats"
      },
      name: "Martin", // new name
      photoUrls: [
        "https://i.pinimg.com/originals/dd/5b/8e/dd5b8e711899ca9acd7032baad1ce280.jpg" // new url
      ],
      tags: [
        {
          id: 0,
          name: "ttt"
        }
      ],
      status: "sold" //new status
    };


    const updateResponse = await axios.put('https://petstore.swagger.io/v2/pet', petData);
    expect(updateResponse.status).to.equal(200);

   
    const getResponse = await axios.get(`https://petstore.swagger.io/v2/pet/${petData.id}`);
    expect(getResponse.status).to.equal(200);
    
    expect(getResponse.data.photoUrls).to.include(petData.photoUrls[0]);
    expect(getResponse.data).to.have.property('name', petData.name);
    expect(getResponse.data).to.have.property('status', petData.status);
    console.log('Updated data:', getResponse.data);

  });
});