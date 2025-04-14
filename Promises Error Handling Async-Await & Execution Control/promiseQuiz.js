/**
 * 🔥 Challenge: Refactor This Callback Hell into Promises
You're given a fake API chain that currently uses nested callbacks (callback hell style). Your job is to refactor it into promise chains and then into async/await.
 */
// 👾 Original Callback Code:

getUser(1, function (user) {
  getPosts(user.id, function (posts) {
    getComments(posts[0].id, function (comments) {
      sendReport(comments, function (response) {
        console.log("Report sent:", response);
      });
    });
  });
});

getUser(1)
  .then((user) => {
    return getPosts(user.id);
  })
  .then((posts) => {
    return getComments(posts[0].id);
  })
  .then((comments) => {
    return sendReport(comments);
  })
  .then((response) => {
    console.log("Report Sent", response);
  })
  .catch((err) => {
    console.log("Something went wrong", err);
  });

const convertToAsync = async () => {
  const findUser = await getUser(1);
  const findFirstPost = await getPosts(user);
};
