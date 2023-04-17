import films from './films.js';

class DataSource {
  static searchFilm(keyword) {
    return fetch(`http://www.omdbapi.com/?apikey=9228526b&s=${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.Search) {
            return Promise.resolve(responseJson.Search);
          } else {
            return Promise.reject(`${keyword} Silahkan Masukkan Judul Film....`);
          }
        });
  }
}

export default DataSource;
