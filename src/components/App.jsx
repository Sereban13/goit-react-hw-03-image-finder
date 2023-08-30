import { Component } from 'react';
import { getImages } from 'services/api';
import ImageGallery from './ImageGallery/ImageGallery';
import BtnLoadMore from './Button/Button';
import Searchbar from './Searchbar/Searchbar';

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

  // .slice(13, searchQuery.length)

  componentDidUpdate = async (prevProps, prevState) => {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });
        const response = await getImages(searchQuery, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  };

  handleSubmit = async event => {
    event.preventDefault();
    const inputValue = event.target.elements.query.value;
    this.hangleChange(inputValue);
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
        <Searchbar submit={this.handleSubmit} />

        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {images.length > 0 && <ImageGallery images={images} />}

        <BtnLoadMore clickLoadMore={this.handleBtnMore} />
      </div>
    );
  }
}
