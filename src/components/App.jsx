import { Component } from 'react';
import { getImages } from 'services/api';
import ImageGallery from './ImageGallery/ImageGallery';
import BtnLoadMore from './Button/Button';
import Searchbar from './Searchbar/Searchbar';
import { GlobalStyle } from './GlobalStyled';
import { AppSection } from './App.Style';
import toast from 'react-hot-toast';

// const notify = () => toast('Enter your request please.');

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    isLoading: false,
    page: 1,
    // totalHits: 0,
  };

  hangleChange = newQuery => {
    this.setState({
      searchQuery: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    });
  };
  componentDidMount = () => {
    toast('Enter your request please.');
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });
        const response = await getImages(searchQuery, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          // totalHits: response.data.totalHits,
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  };

  handleSubmit = event => {
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
      <AppSection>
        <Searchbar submit={this.handleSubmit} />

        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {images.length > 0 && <ImageGallery images={images} />}

        {images.length === 0 ? (
          <></>
        ) : (
          <BtnLoadMore clickLoadMore={this.handleBtnMore} />
        )}

        <GlobalStyle />
      </AppSection>
    );
  }
}
