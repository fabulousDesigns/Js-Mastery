/**
 * Rewrite "rethrow" with async/await
Below you can find the “rethrow” example. Rewrite it using async/await instead of .then/catch.
And get rid of the recursion in favour of a loop in demoGithubUser: with async/await that becomes easy to do.
 */

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  });
}

// Ask for a user name until github returns a valid user
function demoGithubUser() {
  let name = prompt("Enter a name?", "iliakan");

  return loadJson(`https://api.github.com/users/${name}`)
    .then((user) => {
      alert(`Full name: ${user.name}.`);
      return user;
    })
    .catch((err) => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

demoGithubUser();

async function loadJsonAsync(url) {
  const fetchData = await fetch(url);
  if (fetchData.status == 200) {
    return fetchData.json();
  } else {
    throw new HttpError(fetchData);
  }
}

async function demGithubUserAsync() {
  let name = prompt("Enter a name?", "iliakan");
  const loadJson = await loadJsonAsync(`https://api.github.com/users/${name}`);
  alert(`Full name: ${loadJson.name}.`);
  return loadJson;
}

demGithubUserAsync();
