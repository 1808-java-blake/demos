// setInterval(() => {
//   console.log('go')
// }, 1000);

function newJoke() {
  // let ajax = new XMLHttpRequest();
  // ajax.onreadystatechange = () => {
  //   console.log('ready state changed new state is ' + ajax.readyState);
  //   if(ajax.readyState === 4 && ajax.status === 200) {
  //     let respObj = JSON.parse(ajax.response);
  //     document.getElementById('joke').innerText = respObj.value.joke;            
  //   }
  // }
  // ajax.open('GET', 'http://api.icndb.com/jokes/random?limitTo=[nerdy]');
  // ajax.send();
  console.log('sending request');
  fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]')
    .then(resp => {
      return resp.json();
    })
    .then(respObj => {
      console.log(respObj);
      document.getElementById('joke').innerText = respObj.value.joke;
    })
    .catch(err => {
      console.log(err);
    });
  console.log('method done');
}


function findPokemon(event) {
  event.preventDefault();
  let id = document.getElementById('poke-id').value;
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(res => {
      let container = document.getElementById('pokemon-container');
      container.innerHTML = '';
      document.getElementById('poke-name').innerText = res.name;
      for (let key in res.sprites) {
        if (res.sprites[key] !== null) {
          container.innerHTML += `
        <div class="card col-md-6 col-lg-3">
          <img class="card-img-top" src="${res.sprites[key]}" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">${key}</p>
          </div>
        </div>`
        }

      }
    })
    .catch(err => {
      console.log('failed to fetch pokemon');
    })
}
