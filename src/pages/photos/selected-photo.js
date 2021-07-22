import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import PhotosContext from "./PhotosContext";
import './photos.css';

const SelectedPhoto = () => {
    let {selectedPhoto} = useContext(PhotosContext);
    let url = selectedPhoto.download_url;
    console.log('Selected Photo');
    console.log(selectedPhoto);
    return (
            <div>
                <div className="container">
                         <h3>  SELECTED PHOTO PAGE </h3>
                         <p className="text-center text-gray-500 text-xs">
                             &copy;2020 {selectedPhoto.author}. All rights reserved.
                         </p>
                        <div className="imgViewer">
                            {url !== ''  && <img src={selectedPhoto.download_url} alt={selectedPhoto.author}/>}
                        </div>
                    </div>
                </div>
            )
};

SelectedPhoto.propTypes = {
};
SelectedPhoto.defaultProps = {
};

export default SelectedPhoto;
