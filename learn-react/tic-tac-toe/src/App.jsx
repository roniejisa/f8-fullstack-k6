import React, { useEffect, useState } from "react";
import Square from "./components/Square";
import Broad from "./components/Broad";
function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[a] === squares[c]
		) {
			return squares[a];
		}
	}
	return null;
}
const App = () => {
	const [xIsNext, setXIsNext] = useState(true);
	const [squares, setSquares] = useState(Array(9).fill(null));

	const handleSquareClick = (i) => {
		if (squares[i] || calculateWinner(squares)) {
			return;
		}
		const nextSquares = squares.slice();
		if (xIsNext) {
			nextSquares[i] = "X";
		} else {
			nextSquares[i] = "O";
		}
		setSquares(nextSquares);
		setXIsNext(!xIsNext);
	};

	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = "Winner: " + winner;
	} else {
		status = "Next player: " + (xIsNext ? "X" : "O");
	}

	return (
		<div>
            <div className="status">{status}</div>
			<Broad>
				<Square
					onSquareClick={() => handleSquareClick(0)}
					value={squares[0]}
				/>
				<Square
					onSquareClick={() => handleSquareClick(1)}
					value={squares[1]}
				/>
				<Square
					onSquareClick={() => handleSquareClick(2)}
					value={squares[2]}
				/>
			</Broad>
			<Broad>
				<Square
					onSquareClick={() => handleSquareClick(3)}
					value={squares[3]}
				/>
				<Square
					onSquareClick={() => handleSquareClick(4)}
					value={squares[4]}
				/>
				<Square
					onSquareClick={() => handleSquareClick(5)}
					value={squares[5]}
				/>
			</Broad>
			<Broad>
				<Square
					onSquareClick={() => handleSquareClick(6)}
					value={squares[6]}
				/>
				<Square
					onSquareClick={() => handleSquareClick(7)}
					value={squares[7]}
				/>
				<Square
					onSquareClick={() => handleSquareClick(8)}
					value={squares[8]}
				/>
			</Broad>
		</div>
	);
};

export default App;
