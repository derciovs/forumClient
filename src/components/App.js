import React from 'react';
import { getPosts } from '../api/posts';
import Post from './Posts';

const SORT_BY = {
  ASC: 'ASC',
  DESC: 'DESC',
};

class App extends React.Component {
  state = {
    posts: [],
    sortBy: SORT_BY.ASC,
  };

  componentDidMount() {
    console.log('componentDidMount')

    getPosts().then(({ posts }) => this.setState({ posts })) ;
  }

  handleExcluir = (id) => {
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
          return (<Post key={item.timestamp} post={item} onDelete={this.handleExcluir}/>);
        }
        )}
      </div>
    );
  }
}

export default App;
