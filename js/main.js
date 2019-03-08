let arr = [
  { id: 1, src: 'https://placebear.com/50/50', title: 'Some Title', desc: 'The description', favorite: false },
  { id: 2, src: 'https://placebear.com/50/50', title: 'Some Title', desc: 'The description', favorite: false },
  { id: 3, src: 'https://placebear.com/50/50', title: 'Some Title', desc: 'The description', favorite: false },
];


function buildList() {
  const main = document.getElementById('main');

  arr.forEach(item => {
    const wrapper = document.createElement('div');
    const left = document.createElement('div');
    const right = document.createElement('div');
    const image = document.createElement('img');
    const title = document.createElement('h2');
    const lineBreak = document.createElement('br');
    const desc = document.createElement('p');
    const favorite = document.createElement('span');

    wrapper.className = 'wrapper';
    left.className = 'left';
    right.className = 'right';
    favorite.className = 'favorite';
    favorite.setAttribute('data-id', item.id);
    favorite.onclick = handleFavClick;

    title.innerText = item.title;
    title.className = 'title';
    desc.className = 'description';
    desc.innerText = item.desc;
    image.src = item.src;

    main.appendChild(wrapper);
    wrapper.appendChild(favorite);
    wrapper.appendChild(image);
    wrapper.appendChild(right);
    right.appendChild(title);
    right.appendChild(lineBreak);
    right.appendChild(desc);
  });

}

function handleFavClick(e) {
  const id = e.target.dataset.id;
  e.target.className = e.target.className === 'favorite checked' ? 'favorite' : 'favorite checked';
  // Using this method of updating the array because I will not be mutating the array, but replacing it with a new array
  arr = arr.map(item => {
    if (item.id === Number(id)) {
      return Object.assign({}, item, {favorite: true})
    } else {
      return item;
    }
  });
}
