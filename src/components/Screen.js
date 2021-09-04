import styles from "./Screen.module.css";

const Screen = (props) => {
	return <div className={styles["calc__screen"]}>{props.children}</div>;
};

export default Screen;
