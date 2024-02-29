export const getPosts = () => {
    return fetch('http://localhost:5000/posts')
    .then(response => response.json())
}

export const deletePost = (id) => {
    return fetch(`http://localhost:5000/posts/${id}`)
}