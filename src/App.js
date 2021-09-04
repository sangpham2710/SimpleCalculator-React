import { useState } from "react";
import styles from "./App.module.css";
import Screen from "./components/Screen";
import Button from "./components/Button";
import mexp from "math-expression-evaluator";

const listButtons = [
	"AC",
	"DEL",
	"%",
	"/",
	"1",
	"2",
	"3",
	"*",
	"4",
	"5",
	"6",
	"+",
	"7",
	"8",
	"9",
	"-",
	".",
	"0",
	"="
];

const buttonNames = {
	AC: "C",
	DEL: "D",
	"%": "%",
	"/": "/",
	1: "1",
	2: "2",
	3: "3",
	"*": "*",
	4: "4",
	5: "5",
	6: "6",
	"+": "+",
	7: "7",
	8: "8",
	9: "9",
	"-": "-",
	".": ".",
	0: "0",
	"=": "="
};

const normalize = (text, zeros) => {
	return (Math.round(Number(text) * 10 ** zeros) / 10 ** zeros).toString();
};

function App() {
	const [screenValue, setScreenValue] = useState("");
	const handleClick = (e) => {
		const input = e.target.getAttribute("name");
		let updatedTextContent = screenValue;
		try {
			switch (input) {
				case "C":
					updatedTextContent = "";
					break;
				case "D":
					updatedTextContent = updatedTextContent.toString().slice(0, -1);
					break;
				case "%":
					updatedTextContent = mexp.eval(updatedTextContent);
					updatedTextContent *= 0.01;
					updatedTextContent = normalize(updatedTextContent, 10);
					break;
				case "=":
					updatedTextContent = mexp.eval(updatedTextContent);
					updatedTextContent = normalize(updatedTextContent, 10);
					break;
				default:
					updatedTextContent += input;
			}
		} catch (error) {
			console.error(error);
		}
		setScreenValue(updatedTextContent);
	};

	return (
		<div className={styles["calc"]}>
			<Screen>{screenValue}</Screen>
			{listButtons.map((btn) => (
				<Button
					key={buttonNames[btn]}
					name={buttonNames[btn]}
					onClick={handleClick}
				>
					{btn}
				</Button>
			))}
		</div>
	);
}

export default App;
