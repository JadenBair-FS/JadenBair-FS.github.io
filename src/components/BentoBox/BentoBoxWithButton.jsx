import React, { useState } from 'react';
import styles from './BentoBox.module.css';
import linkedInLogo from '../../assets/linkedin-black.svg';
import linkedInLogoWhite from '../../assets/linkedin-white.svg';
import githubLogo from '../../assets/github-black.svg';
import githubLogoWhite from '../../assets/github-white.svg';
import dribbbleLogo from '../../assets/dribbble-black.svg';
import dribbbleLogoWhite from '../../assets/dribbble-white.svg';

const BentoBoxWithButton = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const { link } = props;

    let image = null;

    if (props.text === "LinkedIn") {
        image = isHovered ? linkedInLogoWhite : linkedInLogo;
    } else if (props.text === "GitHub") {
        image = isHovered ? githubLogoWhite : githubLogo;
    } else if (props.text === "Dribbble") {
        image = isHovered ? dribbbleLogoWhite : dribbbleLogo;
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
            <img src={image} alt={`${props.text} logo`} />
        </div>
    );
};

export default BentoBoxWithButton;
