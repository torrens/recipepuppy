
export default class RecipeSearch {

  constructor() {
  }

  async search(query) {
    const page1Results = await this.searchPage(query, '1');
    const page2Results = await this.searchPage(query, '2');
    return [...page1Results, ...page2Results];
  }

  async searchPage(query, page) {
    try {
      let response = await fetch('http://www.recipepuppy.com/api/?q=' + query + '&p=' + page);
      let responseJson = await response.json();
      return responseJson.results;
    } catch(error) {
      console.error(error);
    }
  }
}