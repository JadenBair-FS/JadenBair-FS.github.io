import styles from './Modal.module.css';

function Modal({ isOpen, onClose, type }) {
  if (!isOpen) return null;

  if(type === 'aboutMe') {
    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <button onClick={onClose}>Close</button>
          <h1>About Me</h1>
          <p>
            I am a Full Stack Developer with a background in Sales. I am passionate about creating beautiful and functional applications that solve problems and make people's lives easier. I am a quick learner and enjoy working with new technologies. I am currently looking for new opportunities to grow and expand my skills.
          </p>
        </div>
      </div>
    );
  } 
  
  if(type === 'project1') {
    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <button onClick={onClose}>Close</button>
          <h1>Project 1</h1>
          <p>
            This is the content of Project 1
          </p>
        </div>
      </div>
    );
  } 
  
  if(type === 'project2') {
    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <button onClick={onClose}>Close</button>
          <h1>Project 2</h1>
          <p>
            This is the content of Project 2
          </p>
        </div>
      </div>
    );
  } 
  
  if (type === 'project3') {
    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <button onClick={onClose}>Close</button>
          <h1>Project 3</h1>
          <p>
            This is the content of Project 3
          </p>
        </div>
      </div>
    );
  } 
  
  if (type === 'project4') {
    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <button onClick={onClose}>Close</button>
          <h1>Project 4</h1>
          <p>
            This is the content of Project 4
          </p>
        </div>
      </div>
    );
  } 

  return null;
}

export default Modal;
