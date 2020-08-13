import React from 'react';
import NoLogo from '../img/NoLogo.png';
import '../css/ImagePreview.css';

const ImagePreview = (props) => {
    let imagePreviewUrl = props.imagePreview;
    if (imagePreviewUrl) {
        return <img id='logo' src={imagePreviewUrl} alt='Logo'/>;
    } else {
        return <img id='logo' src={NoLogo} alt='Pas de Logo'/>;
    }; 
}

export default ImagePreview;