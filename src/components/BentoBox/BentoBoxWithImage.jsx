import React from 'react';


import styles from './BentoBox.module.css'



const BentoBoxWithImage = ({ onClick, image , box }) => {
   
    return (
        <div 
            className={`${styles.bentoBoxWithImage} ${styles[box]}`}
            style={{ backgroundImage: `url(${image})` }} 
            onClick={onClick}
        >
        </div>
    );
};

export default BentoBoxWithImage;

