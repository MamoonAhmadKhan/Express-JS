require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

const mamoonGitHubData = {
  "login": "MamoonAhmadKhan",
  "id": 181448139,
  "node_id": "U_kgDOCtCtyw",
  "avatar_url": "https://avatars.githubusercontent.com/u/181448139?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/MamoonAhmadKhan",
  "html_url": "https://github.com/MamoonAhmadKhan",
  "followers_url": "https://api.github.com/users/MamoonAhmadKhan/followers",
  "following_url": "https://api.github.com/users/MamoonAhmadKhan/following{/other_user}",
  "gists_url": "https://api.github.com/users/MamoonAhmadKhan/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/MamoonAhmadKhan/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/MamoonAhmadKhan/subscriptions",
  "organizations_url": "https://api.github.com/users/MamoonAhmadKhan/orgs",
  "repos_url": "https://api.github.com/users/MamoonAhmadKhan/repos",
  "events_url": "https://api.github.com/users/MamoonAhmadKhan/events{/privacy}",
  "received_events_url": "https://api.github.com/users/MamoonAhmadKhan/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Mamoon Ahmad Khan",
  "company": null,
  "blog": "",
  "location": "New Delhi",
  "email": null,
  "hireable": null,
  "bio": "A student with a passion for technology and a keen interest in software engineering.",
  "twitter_username": null,
  "public_repos": 29,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-09-13T06:37:32Z",
  "updated_at": "2025-09-15T19:17:02Z"
};

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/mamoon', (req, res) => {
    res.send('Mamoon Sahab Zindabaad, \n <h1>Qaide Mein Rahegi To Faide Mein Rahegi</h1>');
});

app.get('/shara', (req, res) => {
    res.send('From Mamoon Ahmad,\n To Shara Biharan,\n <h1>Ainthegi To Apne Ghar Bethegii ....</h1>');
});

app.get('/reshma', (req, res) => {
    res.send('<h1>Aag Lage Basti Mein, AMMI Apni Masti Mein</h1>');
});

app.get('/github/mamoon', (req, res) => {
    res.json(mamoonGitHubData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});