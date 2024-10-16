import styles from './BentoBox.module.css'


const BentoBoxWithText = (props) => {

    const { box } = props;

    if(box) {
        return (
            <div className={`${styles.bentoBoxHeader} ${styles[box]}`}>
                <div className={styles.textGroup}>
                    <h1>{props.header}</h1>
                    <section className={styles.pGroup}>
                        <p>{props.firstLine}</p>
                        <p>{props.secondLine}</p>
                        <p>{props.thirdLine}</p>
                    </section>
                    <p>{props.fourthLine}</p>
                    <p>{props.fithLine}</p>
                </div>
            </div>
        )
    }


    return (
        <div className={styles.bentoBoxHeader}>
            <div className={styles.textGroup}>
                <h1>{props.header}</h1>
                <section className={styles.pGroup}>
                    <p>{props.firstLine}</p>
                    <p>{props.secondLine}</p>
                    <p>{props.thirdLine}</p>
                </section>
                <p>{props.fourthLine}</p>
                <p>{props.fithLine}</p>
            </div>
        </div>
    )
    }

export default BentoBoxWithText