import React from 'react';

function GiphyDisplay(props) {
    const {giphy} = props;

    const loaded = () => {
        let randomGif = Math.floor(Math.random() * giphy.data.length);
        return (
            <>
                <img src={giphy.data[0].images.original.url} alt="{giphy.data.[randomGif].title}"/>
            </>
        )
    }

    const loading = () => {
        return <h1>No Giphy to Display</h1>
    }

    return giphy ? loaded() : loading();
}

export default GiphyDisplay;