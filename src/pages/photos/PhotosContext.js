import React from 'react';

const PhotosContext = React.createContext({
    photos: [],
    setPhotos: () => {},
    selectedPhoto: {},
    setSelectedPhoto: () => {}
});
PhotosContext.displayName = 'PhotosContext';
export default PhotosContext;