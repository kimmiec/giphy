import React from 'react';

function GiphyDisplay(props) {
    const {giphy} = props;

    const loaded = () => {
        // let randomGif = Math.floor(Math.random() * giphy.data.length);
        return (
            <>
                <img src={giphy.data.images.original.url} alt="{giphy.data.title}"/>
            </>
        )
    }

    const loading = () => {
        return (
        <div>
            <h3>⬆️</h3>
            <h1>😊</h1>
        </div>
        )
    }

    return giphy ? loaded() : loading();
}

export default GiphyDisplay;