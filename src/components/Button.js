import styles from "./Button.module.css";

const Button = (props) => {
	return (
		<button
			type="button"
			name={props.name}
			className={`${styles["calc__btn"]} ${
				props.name === "C"
					? styles["calc__btn--AC"]
					: props.name === "D"
					? styles["calc__btn--DEL"]
					: props.name === "="
					? styles["calc__btn--EQ"]
					: ""
			}`}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
