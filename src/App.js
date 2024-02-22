import React from 'react';

const SORT_BY = {
  ASC: 'ASC',
  DESC: 'DESC',
};

class App extends React.Component {
  state = {
    posts: [
      { id: 1, titulo: 'Titulo post 1', resumo: 'Resumo post 1' },
      { id: 2, titulo: 'Titulo post 2', resumo: 'Resumo post 2' },
      { id: 3, titulo: 'Titulo post 3', resumo: 'Resumo post 3' },
      { id: 4, titulo: 'Titulo post 4', resumo: 'Resumo post 4' },
      { id: 5, titulo: 'Titulo post 5', resumo: 'Resumo post 5' },
      { id: 6, titulo: 'Titulo post 6', resumo: 'Resumo post 6' },
    ],
    sortBy: SORT_BY.ASC,
  };

  handleClick = (id) => {
    const posts = this.state.posts.filter((item) => item.id !== id);
    this.setState({ posts });
  };

  sortPosts = (a, b) => {
    if (this.state.sortBy === SORT_BY.ASC) {
      return a.id - b.id;
    } else {
      return b.id - a.id;
    }
  };

  handleSort = (sortBy) => this.setState({ sortBy });

  render() {
    const { posts } = this.state;
    const sortedPosts = posts.slice().sort(this.sortPosts);

    return (
      <div>
        <div>
          <button onClick={() => this.handleSort(SORT_BY.ASC)}>SORT ASC</button>
          <button onClick={() => this.handleSort(SORT_BY.DESC)}>SORT DESC</button>
        </div>
        {sortedPosts.map((item) => (
          <div key={item.id}>
            <h5>{item.titulo}</h5>
            <p>{item.resumo}</p>
            <button onClick={() => this.handleClick(item.id)}>Excluir</button>
            <hr></hr>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
