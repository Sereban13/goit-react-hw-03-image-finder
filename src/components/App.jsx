import { Component } from 'react';
import { getImages } from 'services/api';
import ImageGallery from './ImageGallery/ImageGallery';
import BtnLoadMore from './Button/Button';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    isLoading: false,
    page: 1,
  };

  hangleChange = newQuery => {
    this.setState({
      searchQuery: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    });
  };

  componentDidUpdate = async prevState => {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      const { searchQuery, page } = this.state;
      this.setState({ isLoading: true });
      try {
        const imgColection = await getImages(searchQuery, page);
        this.setState({ images: [...prevState.images, ...imgColection] });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.hangleChange(event.target.elements.query.value);
    event.target.reset();
  };

  handleBtnMore = async () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, isLoading, error } = this.state;
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="query" />
            <button type="submit">Search</button>
          </form>
        </div>

        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {images.length > 0 && <ImageGallery images={images} />}

        <BtnLoadMore clickLoadMore={this.handleBtnMore} />
      </div>
    );
  }
}
