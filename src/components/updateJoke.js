const updateJoke = (jokeDom, data) => {
  jokeDom.querySelector('.category').innerText = data.category;

  jokeDom.querySelector('.type').innerText =
      data.type === 'twopart' ? 'Two-Part Joke' : 'Single Joke';

  if (data.type === 'twopart') {
      jokeDom.querySelector('.setup').innerText = data.setup;

      jokeDom.querySelector('.delivery').classList.remove('hide');
      jokeDom.querySelector('.delivery').innerText = data.delivery;
  } else {
      jokeDom.querySelector('.setup').innerText = data.joke;
      jokeDom.querySelector('.delivery').classList.add('hide');
  }

  const flagsList = jokeDom.querySelector('.flags');

  flagsList.innerHTML = '';
  for (const [key, value] of Object.entries(data.flags)) {
      const flagItem = document.createElement('li');
      flagItem.className = value ? 'true' : 'false';
      flagItem.innerText = key + ': ' + value;
      flagsList.appendChild(flagItem);
  }

  jokeDom.querySelector('.lang').innerText = 'Language: ' + data.lang;

  jokeDom.querySelector('.safe').innerText = 'Safe: ' + data.safe;

  return jokeDom;
};

export default updateJoke;