import React, {useEffect, useState, useContext } from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom'
// import PropTypes from 'prop-types';
// import * as classes from './photos.module.scss'
import './photos.css';
// import SelectedPhoto from './selected-photo'
import {BsChevronLeft, BsChevronRight, BsCardImage} from 'react-icons/bs';
import PhotosContext from "./PhotosContext";


const NUM_PHOTOS = 30;

async function myHTTPGET (url) {
    return await fetch(url);
}


const Photos = () => {
    let [idx, setIdx] = useState(0); //first img
    let match = useRouteMatch();
    console.log(match.path);
    let history = useHistory();
    let {photos, setPhotos, selectedPhoto, setSelectedPhoto} = useContext(PhotosContext);


    useEffect(() => {
        async function getPhotoDetails () {
            let res = await myHTTPGET(`https://picsum.photos/v2/list?limit=${NUM_PHOTOS}`);

            if(!res.ok) {
                throw new Error(`HTTP Error!! Status: ${res.status}`);
            }
            let imgInfo = await res.json();
            // console.log(imgInfo);
            setPhotos(imgInfo);
            setSelectedPhoto(imgInfo[0]);
        }
        getPhotoDetails();
    }, [setSelectedPhoto, setPhotos]);

    // const renderPhoto = (data, id, flag) => {
    //     if(flag === 1) {
    //         console.log(data);
    //         // render primary photo
    //         let div = document.createElement('div');
    //         div.key = idx;
    //         div.style.backgroundImage = `url(${data.download_url})`;
    //         div.addEventListener('click', selectImage);
    //         console.log(div);
    //         return div;
    //     } else {
    //         let img = document.createElement('img');
    //         img.addEventListener('load', () => {
    //             console.log('img load successful.')
    //         });
    //         img.addEventListener('error', () => {
    //             return <span> <BsCardImage/> </span>
    //         });
    //         if(data.download_url) {
    //             img.src = data.download_url;
    //             img.alt = data.author;
    //             img.key = data.id;
    //             img.id = id ? id : data.id;
    //             img.addEventListener('click', setPhoto);
    //             // console.log(img);
    //             return img;
    //         } else {
    //             return <span> <BsCardImage/> </span>
    //         }
    //      }
    // };


    const showNext = () => {
        idx = idx+1;
        if (idx >= photos.length) {
            idx = 0
        }
        setIdx(idx);
        setSelectedPhoto(photos[idx]);
    };

    const showPrevious = () => {
        idx = idx-1;
        if (idx < 0) {
            idx = photos.length-1;
        }
        setIdx(idx);
        setSelectedPhoto(photos[idx]);
    };

    const setPhotoAsMain = (ev) => {
        console.log(ev.target.id);
        setIdx(ev.target.id);
        setSelectedPhoto(photos[idx]);
    };

    const selectImage = (ev) => {
        // console.log(ev.target);
        // console.log('Navigate to conversion page');
        setSelectedPhoto(photos[ev.target.id]);
        history.push(`${match.path}/${ev.target.id}`);
    };
    //     {allPhotos.length > 0 && <div style={{backgroundImage: `url(${selectedImg.download_url})`}} key={idx} id={idx} onClick={setPhoto}></div>}
    //

    return (
        <div>

                <div className="parent">
                    <div className="imgViewer">
                        <span className="leftIcon" onClick={showPrevious}> <BsChevronLeft/> </span>
                        {photos.length > 0 && <img src={selectedPhoto.download_url} alt={selectedPhoto.author} key={idx} id={idx} onClick={selectImage}/>}
                        <span className="rightIcon" onClick={showNext}> <BsChevronRight/> </span>
                    </div>

                    <section className="allImgContainer">
                        {photos.length > 0 && photos.map((pObj, id) => {
                            // console.log(selectedImg)
                            // return renderPhoto(pObj,id);
                            return <img src={pObj.download_url} alt={pObj.author} key={pObj.id} id={id} onClick={setPhotoAsMain}/>
                        })}
                    </section>
                </div>
        </div>
    );
};

Photos.propTypes = {};
Photos.defaultProps = {};

export default Photos;
