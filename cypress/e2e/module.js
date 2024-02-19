// module.js
export const fetchData = async () => {
    // Some asynchronous operation to fetch data
  };
  
  // module.test.js
  import { fetchData } from './module';
  
  jest.mock('./module');
  
  describe('Mocking Modules in Jest', () => {
    it('should mock fetchData function', async () => {
      fetchData.mockResolvedValue('mocked data');
      const data = await fetchData();
      expect(data).toBe('mocked data');
    });
  });
  