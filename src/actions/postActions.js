import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispactch => {
  console.log("fetchings");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispactch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = postData => dispactch => {
  console.log("save");
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispactch({
        type: NEW_POST,
        payload: post
      })
    );
};
