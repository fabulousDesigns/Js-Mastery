function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

loadJson("https://javascript.info/no-such-user.json").catch(console.log); // Error: 404

async function loadJsonAsync(url) {
  const fetchJson = await fetch(url);
  if (fetchJson.status == 200) {
    return fetchJson.json();
  } else {
    throw new Error(fetchJson.status);
  }
}

loadJsonAsync("https://javascript.info/no-such-user.json").catch(console.log); // Error: 404


