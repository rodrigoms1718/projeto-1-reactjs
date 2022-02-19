import { Component } from 'react';
import './App.css';
import { Posts } from './components/Posts';
import { loadPosts } from './utils/load-posts';

class App extends Component {
  /**
   * state só passa estado para o componente filho =>(props)
   */
  state = {
    posts: []
  };

  
  /**
   * padrao react - lifecycle methods
   * está com async/await - pois o método loadPosts está com promisse
   */
  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
  }

  render() {
    const { posts } = this.state;

    return (
      <section className='container'>
        <Posts posts={posts} />
      </section>

    )
  }
}

export default App;
