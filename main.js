fetch('https://pokeapi.co/api/v2/generation/1/')
  .then(response => response.json())
  .then(json => getPoke(json))

const getPoke = (x) => {
  const species = x.pokemon_species;
  console.log(species)


  for (let i = 1; i <= 151; i++) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${i}`)
      .then(response => response.json())
      .then(json => pokeData(json))
  }
}

const pokeData = (data) => {
  let header = document.createElement('h4')
  let listItem = document.createElement('li')
  let imageItem = document.createElement('img')
  let text = document.createElement('h5')
  let moves = document.createElement('ul')


  document.querySelector('ul').prepend(listItem)
  listItem.append(imageItem)
  listItem.append(header)
  listItem.append(text)
  listItem.append(moves)

  header.textContent = data.name
  imageItem.src = data.sprites.front_default
  text.textContent = data.id
  // for (i = 0; i <4; i++) {
  //   let li = document.createElement('li')
  //   moves.appendChild(li)
  //   li.textContent = data.moves[i].move.name
  // }
  //
        text.style.display = 'none';
  //       moves.style.display = 'none';
  //
  const handleClick = () => {
    text.style.display = 'block'
    // moves.style.display = 'block'
  }
  const handleClickAway = () => {
    text.style.display = 'none'
    // moves.style.display = 'none'
  }
  listItem.addEventListener('mousedown', handleClick)
  listItem.addEventListener('mouseup', handleClickAway)
}

const handleKeySearch = () => {
  let filter = input.value.toUpperCase();
  let listItems = document.querySelectorAll('li');
  listItems.forEach(listItem => {
    let header = listItem.querySelector("h4");
    let text = header.innerText.toUpperCase();

    if (text.indexOf(filter) > -1) {
      listItem.style.display = "";
    } else {
      listItem.style.display = "none";
    }
  })
};

const input = document.querySelector("input")
input.addEventListener("keyup", handleKeySearch)
