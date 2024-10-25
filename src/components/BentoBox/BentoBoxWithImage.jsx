import React, { useState } from "react";
import styles from "./BentoBox.module.css";

const BentoBoxWithImage = ({ onClick, image, box, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles.bentoBoxWithImage} ${styles[box]}`}
      style={{ backgroundImage: `url(${image})` }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className={styles.bentoBoxWithImageOverlay}>{children}</div>
      )}
    </div>
  );
};

export default BentoBoxWithImage;
