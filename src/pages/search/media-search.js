import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import * as classes from './search.module.scss'
// import {ItunesSearchOptions} from "node-itunes-search";

// async function myHTTPGET (url) {
//     return await fetch(url, {
//         headers : {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         }
//     });
// }

const MediaSearch = (props) => {
    const itunesApi = require("node-itunes-search");
    // const url = `itunes.apple.com/search?entity=allArtist&attribute=allArtistTerm&country=kr&term=`
    let [data, setData] = useState([]);
    const onEnter = (ev)  => {
        const searchOptions = {
            term: ev.target.value,
            entity: 'allArtist',
            attribute: 'allArtistTerms',
            country: 'KR'
        };

        async function getSearchResults (searchTerm) {
            // let URL = url + searchTerm;
            let res = await itunesApi.searchItunes(searchOptions);
            console.log(res);
            setData(res.results);
        }
        if(ev.key === 'Enter') {
            console.log('Make search GET');
            let search = ev.target.value.split(' ').join('+');
            getSearchResults(search);
            ev.target.value = "";
        }
    }

    return (
        < div >
             <div className={classes.title}>
                 <h3> Search for music by your favorite KPOP artist </h3>
                 <h6>Powered by iTunes </h6>
            </div>
            <div className={classes.searchbar}>
                <input id={classes.enter} type="text" placeholder="Whose music are you looking for?" onKeyDown={onEnter}/>
             </div>
             <div className={classes.results}>
                {data.length > 0 && data.map((r) => {
                        return <div className={classes.album}> <a href={r.raw.artistLinkUrl}>  {r.artistName} {r.raw.primaryGenreName}</a></div>
                    }) }
            </div>
        < /div>
)
    ;
};

MediaSearch.propTypes = {};
MediaSearch.defaultProps = {};

export default MediaSearch;
