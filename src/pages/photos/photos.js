import React, {useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
// import * as classes from './photos.module.scss'
import './photos.css';

async function myHTTPGET (url) {
    console.log('myHTTPGET called')
    return await fetch(url);
}

const Photos = () => {
    let [allPhotos, setAllPhotos] = useState([]);

    useEffect(() => {
        async function getPhotoDetails () {
            let res = await myHTTPGET('https://picsum.photos/v2/list');
            // console.log(res.body);
            if(!res.ok) {
                throw new Error(`HTTP Error!! Status: ${res.status}`);
            }
            let imgInfo = await res.json();
            console.log('Inside useEffect')
            setAllPhotos(imgInfo);
            console.log(allPhotos);
        }
        getPhotoDetails();
    });

    return (
        <div>
            <div className="container">
            {allPhotos.length > 0 && allPhotos.map((pObj) => {
                console.log(pObj);
                return <img src={pObj.download_url} alt={pObj.author} key={pObj.id}/>
            })}
            </div>
        </div>
    );
};

Photos.propTypes = {};
Photos.defaultProps = {};

export default Photos;
