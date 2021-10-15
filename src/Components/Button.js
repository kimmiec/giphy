import React from 'react';

function Button(props) {
    
    return(
        <div>
            <button onClick={props.Giphy}>🌟 Click for Gifs! 🌟</button>
        </div>
    )
}

export default Button;



// const [btn, setBtn] = useState({random:" "});

//     const handleClick = (event) => {
//         setBtn({...btn, [event.target.title]: event.target.value});
//     }


