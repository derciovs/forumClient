import React from 'react';
import { getPosts } from './api/posts';

const SORT_BY = {
  ASC: 'ASC',
  DESC: 'DESC',
};

const Post = (props) => {
  const {post} = props;
  return (
    <div key={post.timestamp}>
      <h5>{post.titulo}</h5>
      <div>{post.corpo}</div>
      <div>{post.autor}</div>
      <div>{post.categoria}</div>
      <button onClick={() => this.handleClick(post.id)}>Excluir</button>
      <hr></hr>
    </div>
  );
}

class App extends React.Component {
  state = {
    posts: [],
    sortBy: SORT_BY.ASC,
  };

  componentDidMount() {
    console.log('componentDidMount')

    getPosts().then((res) => this.setState({posts : res.posts})) ;
  }

  handleClick = (id) => {
    const posts = this.state.posts.filter((item) => item.id !== id);
    this.setState({ posts });
  };

  sortPosts = (a, b) => {
    if (this.state.sortBy === SORT_BY.ASC) {
      return a.timestamp - b.timestamp;
    } else {
      return b.timestamp - a.timestamp;
    }
  };

  handleSort = (sortBy) => this.setState({ sortBy });

  render() {
    console.log('render')
    const { posts } = this.state;
    const sortedPosts = posts ? posts.slice().sort(this.sortPosts) : [];

    return (
      <div>
        <div>
          <button onClick={() => this.handleSort(SORT_BY.ASC)}>SORT ASC</button>
          <button onClick={() => this.handleSort(SORT_BY.DESC)}>SORT DESC</button>
        </div>
        {sortedPosts.map((item) => {
          return (<Post post={item}/>);
        }
        )}
      </div>
    );
  }
}

export default App;
