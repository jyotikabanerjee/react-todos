import React from 'react';
import PropTypes from 'prop-types';
import './photos.css';

const SelectedPhoto = ({url}) => {
    return (
        <div>
                <div className="container">
                    SELECTED PHOTO PAGE
                    <div className="imgViewer">
                        {url !== ''  && <image src={url} alt="selected image"/>}
                    </div>
                </div>
        </div>
)
    ;
};

SelectedPhoto.propTypes = {
    url: PropTypes.string
};
SelectedPhoto.defaultProps = {
    url: ''
};

export default SelectedPhoto;
