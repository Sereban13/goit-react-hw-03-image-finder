import { Component } from 'react';
import Button from './Button/Button';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  render() {
    return (
      <div>
        <Searchbar />
        <Button />
      </div>
    );
  }
}
