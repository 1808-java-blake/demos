console.log('loading js');
function createMovie(event) {
  event.preventDefault();

  const title = document.getElementById('input-title').value;
  const year = document.getElementById('input-year').value;
  const numBlades = document.getElementById('input-number-blades').value;

  const movie = {
    title,
    year,
    numBlades
  }
  
  fetch('http://localhost:9001/movies', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  })
  .then(resp => resp.json())
  .then(resp => {
    window.location = 'http://localhost:9001/home/home.html';
  })
  .catch(err => {
    console.log(err);
  });
}