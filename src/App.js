import styles from "./App.module.css";
import Screen from "./components/Screen";
import Button from "./components/Button";

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

function App() {
	return (
		<div className={styles["calc"]}>
			<Screen />
			{listButtons.map((btn) => (
				<Button key={buttonNames[btn]} name={buttonNames[btn]}>
					{btn}
				</Button>
			))}
		</div>
	);
}

export default App;
