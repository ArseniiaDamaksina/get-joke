const createJoke = (data) => {
  const container = document.createElement('div');
  container.id = 'joke-container';
  container.className = 'joke';

  const category = document.createElement('h2');
  category.className = 'category';
  category.id = 'category-' + data.category;
  category.innerText = data.category;

  const type = document.createElement('p');
  type.className = 'type';
  type.id = 'type-' + data.type;
  type.innerText = data.type === 'twopart' ? 'Two-Part Joke' : 'Single Joke';

  container.append(category, type);

  const setup = document.createElement('p');
  setup.className = 'setup';
  setup.id = 'setup-' + data.id;
  setup.innerText = data.setup;
  container.append(setup);
  
  if (data.type === 'twopart') {
    const delivery = document.createElement('p');
    delivery.className = 'delivery';
    delivery.id = 'delivery-' + data.id;
    delivery.innerText = data.delivery;
    container.append(setup, delivery);
  } else {
    setup.innerText = data.joke;
  } 

  const flagsList = document.createElement('ul');
  flagsList.className = 'flags';
  flagsList.id = 'flags-' + data.id;
  for (const [key, value] of Object.entries(data.flags)) {
      const flagItem = document.createElement('li');
      flagItem.className = value ? 'true' : 'false';
      flagItem.innerText = key + ': ' + value;
      flagsList.appendChild(flagItem);
  }

  const lang = document.createElement('p');
  lang.className = 'lang';
  lang.id = 'lang-' + data.lang;
  lang.innerText = 'Language: ' + data.lang;

  const safe = document.createElement('p');
  safe.className = 'safe';
  safe.id = 'safe-' + data.safe;
  safe.innerText = 'Safe: ' + data.safe;
  container.append(flagsList, lang, safe);

  return container;
}

export default createJoke;