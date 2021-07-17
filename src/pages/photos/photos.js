import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
// import PropTypes from 'prop-types';
// import * as classes from './photos.module.scss'
import './photos.css';
import SelectedPhoto from './selected-photo'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';

async function myHTTPGET (url) {
    // console.log('myHTTPGET called')
    return await fetch(url);
}

const Photos = () => {
    let [allPhotos, setAllPhotos] = useState([]);
    let [idx, setIdx] = useState(0); //first img
    let history = useHistory();

    useEffect(() => {
        async function getPhotoDetails () {
            let res = await myHTTPGET('https://picsum.photos/v2/list');
            // console.log(res.body);
            if(!res.ok) {
                throw new Error(`HTTP Error!! Status: ${res.status}`);
            }
            let imgInfo = await res.json();
            // console.log('Inside useEffect')
            setAllPhotos(imgInfo);
            // console.log(allPhotos);
        }
        getPhotoDetails();
    }, []);

    const showNext = () => {
        idx = idx+1;
        if (idx >= allPhotos.length) {
            idx = 0
        }
        setIdx(idx);
    }

    const showPrevious = () => {
        idx = idx-1;
        if (idx < 0) {
            idx = allPhotos.length-1;
        }
        setIdx(idx);
    }

    const setPhoto = (ev) => {
        console.log(ev.target.id);
        setIdx(ev.target.id);
    }

    const selectImage = (ev) => {
        console.log(ev.target);
        console.log('Navigate to conversion page')
        history.push('/react-photos/'+ev.target.id);
        return <SelectedPhoto/>
    };

    return (
        <div>
            <div className="parent">
                <div className="imgViewer">
                    <span className="leftIcon" onClick={showPrevious}> <BsChevronLeft/> </span>
                    {allPhotos.length > 0 && <img src={allPhotos[idx].download_url} alt={allPhotos[idx].author} key={allPhotos[idx].id} id={allPhotos[idx].id} onClick={selectImage}/>}
                    <span className="rightIcon" onClick={showNext}> <BsChevronRight/> </span>
                </div>

                <div className="allImgContainer">
                    {allPhotos.length > 0 && allPhotos.map((pObj, id) => {
                        return <img src={pObj.download_url} alt={pObj.author} key={pObj.id} id={id} onClick={setPhoto}/>
                    })}
                 </div>
            </div>
        </div>
    );
};

Photos.propTypes = {};
Photos.defaultProps = {};

export default Photos;
