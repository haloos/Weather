class Weather {
  constructor(city, state) {
    this.apiKey = '99dfe35fc7de1ee';
    this.city = city;
    this.state = state;
  }

  // Fetcvh weather from API
  async getWeather() {
    const repsonse = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`); 

    const repsonseData = await repsonse.json();

    return repsonseData.current_observation;
  }

  // Change weather location
  changelocation(city, state) {
    this.city = city;
    this.state = state;
  }
}