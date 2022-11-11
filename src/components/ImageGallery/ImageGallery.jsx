import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';
import { LoadMore } from 'components/Button/Button';

export class ImageGallery extends Component {
  render() {
    const { dataBase, showModal, onClick, loadMoreClick } = this.props;

    return (
      dataBase && (
        <>
          <List>
            {dataBase.map(data => (
              <ImageGalleryItem
                key={data.id}
                data={data}
                clickModal={onClick}
                showModal={showModal}
              />
            ))}
          </List>
          {dataBase.length >= 11 && <LoadMore buttonClick={loadMoreClick} />}
        </>
      )
    );
  }
}
ImageGallery.propTypes = {
  dataBase: PropTypes.array.isRequired,
};
ImageGalleryItem.propTypes = {
  data: PropTypes.object.isRequired,
  showModal: PropTypes.bool,
};
LoadMore.propTypes = {
  buttonClick: PropTypes.func.isRequired,
};
