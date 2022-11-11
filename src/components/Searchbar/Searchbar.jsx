import { Component } from 'react';
import PropTypes from 'prop-types';
import { RiSearch2Line } from 'react-icons/ri';
import { Header, Form, Input, Submit, Label } from './Searchbar.styled';

export class SearchBar extends Component {
  state = {
    imageSearch: '',
  };

  handleImageChange = e => {
    this.setState({ imageSearch: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.imageSearch.trim() === '') {
      return alert(
        `No pictures were found for the name ${this.state.imageSearch}.`
      );
    }
    this.props.onSubmit(this.state.imageSearch);
    this.setState({ imageSearch: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Submit type="submit">
            <Label>
              <RiSearch2Line />
            </Label>
          </Submit>
          <Input
            type="text"
            name="imageSearch"
            value={this.state.imageSearch}
            onChange={this.handleImageChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}
Form.propTypes = {
  onSubmit: PropTypes.func,
};
Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
