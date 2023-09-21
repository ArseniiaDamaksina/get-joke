const getJoke = async () => {
  try {
    const res = await fetch(`https://v2.jokeapi.dev/joke/Any`);

    if(!res.ok) {
      throw new Error(`An error has occured: ${res.status}`);
    }

    const data = await res.json();
    return data;

  } catch (err) {
    console.error(err);
  }
}

export default getJoke;