// fetch-data.js

const axios = require('axios');

async function fetchAndDisplayPosts() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data;

        posts.forEach(post => {
            console.log(post.title);
        });
    } catch (error) {
        console.error('Error fetching the posts:', error.message);
    }
}

module.exports = fetchAndDisplayPosts;
