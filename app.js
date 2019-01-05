// Init weather object
const weather = new Weather('Boston', 'MA');
// Init UI
const ui = new UI();
weather.getWeather()
.then(results => {
 ui.paint(results);
})
.catch(err => console.log(err));