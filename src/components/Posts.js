const Post = ({ post, onDelete }) => {
    return (
      <div>
        <h5>{post.titulo}</h5>
        <div>{post.corpo}</div>
        <div>{post.autor}</div>
        <div>{post.categoria}</div>
        <button onClick={() => onDelete(post.id)}>Excluir</button>
        <hr></hr>
      </div>
    );
  }

  export default Post;