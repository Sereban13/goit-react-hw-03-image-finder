import { Component } from 'react';
import { getImages } from 'services/api';
// import axios from 'axios';

const ArticleList = ({ images }) => (
  <ul>
    {images.map(({ id, webformatURL }) => (
      <li key={id}>
        <img src={webformatURL} alt="title" />
      </li>
    ))}
  </ul>
);
export class App extends Component {
  state = {
    images: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      // const response = await axios.get(
      //   `/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      // );
      const response = await getImages();
      this.setState({ images: response.data.hits });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { images, isLoading, error } = this.state;
    return (
      <div>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {images.length > 0 && <ArticleList images={images} />}
      </div>
    );
  }
}
