import React, { useState } from 'react';
import styles from './BentoBox.module.css';

const BentoBoxWithButton = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const { link } = props;

    const handleSVG = (text) => {
        if(text === "LinkedIn") {
            return(
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 32 32" id="linkedin">
                    <g fill="currentColor">
                        <path d="M23.247 21.927v-5.36c0-2.872-1.533-4.208-3.577-4.208-1.649 0-2.388.907-2.8 1.544v-1.324h-3.107c.041.877 0 9.348 0 9.348h3.107v-5.221c0-.279.02-.558.103-.757.224-.558.735-1.136 1.593-1.136 1.125 0 1.574.857 1.574 2.113v5.001h3.107zM10.49 11.303c1.083 0 1.758-.718 1.758-1.616-.02-.917-.675-1.614-1.738-1.614s-1.757.697-1.757 1.614c0 .897.675 1.616 1.717 1.616h.02zm1.553 10.624v-9.348H8.937v9.348h3.106z"></path>
                        <path d="M16 1c8.271 0 15 6.729 15 15s-6.729 15-15 15S1 24.271 1 16 7.729 1 16 1m0-1C7.163 0 0 7.163 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0z"></path>
                    </g>
                </svg>
            )
        } 
        if(text === "GitHub") {
            return(
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="github">
                    <g>
                        <g>
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 .5A11.5 11.5 0 0 0 .5 12a11.82 11.82 0 0 0 9 11.5v-3h-1c-2.62 0-3.54-4-5-4 2.79 0 3.33 2 5 2a.89.89 0 0 0 1-1v-.35c-2.91-.82-5-3-5-5.65a5.26 5.26 0 0 1 1.57-3.66A3.16 3.16 0 0 1 6.5 4.5 5.26 5.26 0 0 1 8.88 6a9.14 9.14 0 0 1 6.24 0 5.26 5.26 0 0 1 2.38-1.5 3.16 3.16 0 0 1 .43 3.34 5.26 5.26 0 0 1 1.57 3.66c0 2.74-2.29 5-5.42 5.76a4.68 4.68 0 0 1 .42 2.24v4a11.82 11.82 0 0 0 9-11.5A11.5 11.5 0 0 0 12 .5Z"></path>
                        </g>
                    </g>
                </svg>
            )
        }  
        if(text === "Dribbble") {
            return(
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="dribbble">
                    <g>
                        <circle cx="12" cy="12" r="11.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></circle>
                        <g>
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.63 1.36c5.5 6.64 8.37 13 9.37 21M.55 10.88C10.39 10.66 16 9.1 20.22 4M4.11 20.37c5.29-8.05 11.78-9.28 19.31-7.05"></path>
                        </g>
                    </g>
                </svg>
            )
        }
    }


    const handleKeyPress = (e) => {
        console.log(e.key);
        if (e.key === 'Enter' && isHovered) {
            window.open(link);
        }
    }

    return (
        <div 
            className={
               styles.bentoBoxWithButton
            }
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)} 
            onBlur={() => setIsHovered(false)}
            onClick={() => window.open(props.link)}
            onKeyDown={handleKeyPress}
        >
            <h3>{props.text}</h3>
            {handleSVG(props.text)}
            {/* <img src={image} alt={`${props.text} logo`} /> */}
        </div>
    );
};

export default BentoBoxWithButton;
