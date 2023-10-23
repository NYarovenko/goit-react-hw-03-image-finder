import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { GlobalStyle } from 'GlobalStyle';
import { StyledApp } from 'ContainerApp.styled';
import { fetchImages } from './api';
import { Loader } from './Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    loading: false,
    error: false,
    loadMore: false,
  };

  // запрос с Searchbar формы
  onSearchExpression = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const query = form.elements.query.value;

    this.setState({ query: query });
  };

  async fetchImagesOnQuery() {
    try {
      this.setState({ loading: true, error: false });
      toast.error('O...ops, something went wrong');
      const images = await fetchImages(this.state.query, this.state.page);

      this.setState(prevState => {
        return {
          images: [...prevState.images, ...images.hits],
          loadMore: this.state.page < Math.ceil(images.totalHits / 12),
        };
      });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      this.setState({ images: [] });
      this.fetchImagesOnQuery();
      return;
    }

    if (this.state.page !== prevState.page) {
      this.fetchImagesOnQuery();
    }
  }

  onLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { images, loading, loadMore, error } = this.state;
    return (
      <StyledApp>
        <GlobalStyle />
        <Searchbar onSearchExpression={this.onSearchExpression} />

        {images.length !== 0 && <ImageGallery images={this.state.images} />}

        {loading && <Loader />}

        {loadMore && <Button onLoadMore={this.onLoadMore} />}

        {error && <Toaster />}
      </StyledApp>
    );
  }
}
