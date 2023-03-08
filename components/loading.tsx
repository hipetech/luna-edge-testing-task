import React from "react";
import styles from "@/styles/loading.module.css";

const Loading = () => {
    return (
        <div className={styles.centered}>
            <div className={styles.blob1}></div>
            <div className={styles.blob2}></div>
        </div>
    );
};

export default Loading;