import styles from './BentoBox.module.css'



const BentoBoxWithImage = (props) => {
    const { box, image} = props;

    if(box === null) {
        return (
            <div className={`${styles.bentoBoxWithImage}`}
            style={{ backgroundImage: `url(${image})` }}
            >
            </div>
        );
    }

    return (
        <div 
            className={`${styles.bentoBoxWithImage} ${styles[box]}`} 
            style={{ backgroundImage: `url(${image})` }}
        >
        </div>
    );
};

export default BentoBoxWithImage;

