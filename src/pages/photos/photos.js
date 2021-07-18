import React, {useEffect, useState} from 'react';
import {useHistory, useRouteMatch, Switch, Route} from 'react-router-dom'
// import PropTypes from 'prop-types';
// import * as classes from './photos.module.scss'
import './photos.css';
// import SelectedPhoto from './selected-photo'
import {BsChevronLeft, BsChevronRight, BsCardImage} from 'react-icons/bs';

async function myHTTPGET (url) {
    // console.log('myHTTPGET called')
    return await fetch(url);
}

const Photos = () => {
    let [allPhotos, setAllPhotos] = useState([]);
    let [idx, setIdx] = useState(0); //first img
    let [selectedImg, setSelectedImg] = useState({}); //first img
    let match = useRouteMatch();
    console.log(match.path);
    let history = useHistory();

    useEffect(() => {
        async function getPhotoDetails () {
            let res = await myHTTPGET('https://picsum.photos/v2/list?limit=200');
            // console.log(res.body);
            if(!res.ok) {
                throw new Error(`HTTP Error!! Status: ${res.status}`);
            }
            let imgInfo = await res.json();
            console.log(imgInfo);
            setAllPhotos(imgInfo);
            setSelectedImg(imgInfo[0]);
        }
        getPhotoDetails();
    }, []);

    const renderPhoto = (data, id, flag) => {
        if(flag === 1) {
            console.log(data);
            // render primary photo
            let div = document.createElement('div');
            div.key = idx;
            div.style.backgroundImage = `url(${data.download_url})`;
            div.addEventListener('click', selectImage)
            console.log(div)
            return div;
        } else {
            let img = document.createElement('img');
            img.addEventListener('load', () => {
                console.log('img load successful.')
            })
            img.addEventListener('error', () => {
                return <span> <BsCardImage/> </span>
            })
            if(data.download_url) {
                img.src = data.download_url;
                img.alt = data.author;
                img.key = data.id;
                img.id = id ? id : data.id;
                img.addEventListener('click', setPhoto);
                // console.log(img);
                return img;
            } else {
                return <span> <BsCardImage/> </span>
            }


         }
    }


    const showNext = () => {
        idx = idx+1;
        if (idx >= allPhotos.length) {
            idx = 0
        }
        setIdx(idx);
        setSelectedImg(allPhotos[idx]);
    }

    const showPrevious = () => {
        idx = idx-1;
        if (idx < 0) {
            idx = allPhotos.length-1;
        }
        setIdx(idx);
        setSelectedImg(allPhotos[idx]);
    }

    const setPhoto = (ev) => {
        console.log(ev.target.id);
        setIdx(ev.target.id);
        setSelectedImg(allPhotos[ev.target.id]);
    }

    const selectImage = (ev) => {
        console.log(ev.target);
        console.log('Navigate to conversion page')
        history.push('/react-photos/'+ev.target.id);
    };
    //     {allPhotos.length > 0 && <div style={{backgroundImage: `url(${selectedImg.download_url})`}} key={idx} id={idx} onClick={setPhoto}></div>}
    //
    return (
        <div>
            <div className="parent">
                <div className="imgViewer">
                    <span className="leftIcon" onClick={showPrevious}> <BsChevronLeft/> </span>
                        {allPhotos.length > 0 && <img src={selectedImg.download_url} alt={selectedImg.author} key={idx} id={idx} onClick={setPhoto}/>}
                    <span className="rightIcon" onClick={showNext}> <BsChevronRight/> </span>
                </div>

                <section className="allImgContainer">
                    {allPhotos.length > 0 && allPhotos.map((pObj, id) => {
                        // console.log(selectedImg)
                        // return renderPhoto(pObj,id);
                         return <img src={pObj.download_url} alt={pObj.author} key={pObj.id} id={id} onClick={setPhoto}/>
                    })}
                 </section>
            </div>
                        <Switch>
                            <Route path={`${match.path}/:id}`}></Route>
                        </Switch>
        </div>
    );
};

Photos.propTypes = {};
Photos.defaultProps = {};

export default Photos;
