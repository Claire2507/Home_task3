const axios = require('axios');


describe('Deleting a Pet', () => {
  it('should allow delete a Pet', async () => {
    const newPetData = {
      id: 162,
      category: {
        id: 0,
        name: "dogs"
      },
      name: "Parker",
      photoUrls: [
        "url"
      ],
      tags: [
        {
          id: 0,
          name: "ttt"
        }
      ],
      status: "available"
    };

   
      const createResponse = await axios.post('https://petstore.swagger.io/v2/pet', newPetData);
      expect(createResponse.status).to.equal(200);
  
      const getResponseBeforeDelete = await axios.get(`https://petstore.swagger.io/v2/pet/${newPetData.id}`);
      expect(getResponseBeforeDelete.status).to.equal(200);
    
    
      const delResponse = await axios.delete(`https://petstore.swagger.io/v2/pet/${newPetData.id}`);
      expect(delResponse.status).to.equal(200);
  
    
    try {
      await axios.get(`https://petstore.swagger.io/v2/pet/${newPetData.id}`);
      throw new Error('Pet was not deleted successfully');
    } catch (error) {
      expect(error.response.status).to.equal(404);
  }
  });
});