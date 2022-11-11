import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { fetchImage } from './api/service-api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Wrapper } from './App.styled';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    page: 1,
    imageSearch: '',
    imageData: [],
    error: null,
    status: 'idle',
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.imageSearch !== this.state.imageSearch) {
      this.setState({ status: 'pending' });

      try {
        const imageData = await fetchImage(
          this.state.imageSearch,
          this.state.page
        );
        this.setState({ imageData, status: 'resolved' });
      } catch (error) {
        this.setState({
          error: 'Sorry, failed to load dog breed',
          status: 'rejected',
        });
      }
    }

    if (
      prevState.page !== this.state.page &&
      prevState.imageSearch === this.state.imageSearch
    ) {
      this.setState({ status: 'pending' });

      try {
        const imageData = await fetchImage(
          this.state.imageSearch,
          this.state.page
        );
        this.setState(prevState => ({
          imageData: [...prevState.imageData, ...imageData],
          status: 'resolved',
        }));
      } catch (error) {
        this.setState({
          error: 'Sorry, failed to load dog breed',
          status: 'rejected',
        });
      }
    }
  }
  handleSearchSubmit = imageSearch => {
    this.setState({ imageSearch });
    this.setState({ page: 1 });
  };

  onLoadMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { error, status, imageData } = this.state;

    if (status === 'idle') {
      return (
        <Wrapper>
          <SearchBar onSubmit={this.handleSearchSubmit} />
        </Wrapper>
      );
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <p>{error.message}</p>;
    }
    if (status === 'resolved') {
      return (
        <Wrapper>
          <SearchBar onSubmit={this.handleSearchSubmit} />
          <ImageGallery
            dataBase={imageData}
            clickModal={this.toggleModal}
            loadMoreClick={this.onLoadMoreClick}
          />
        </Wrapper>
      );
    }
  }
}
