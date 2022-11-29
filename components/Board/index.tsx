import Image from "next/image";
import React from "react";
import styles from "./index.module.scss";

type BoardProps = {};

const Board: React.FC<BoardProps> = () => {
  const [player, setPlayer] = React.useState("X");
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [winner, setWinner] = React.useState("");

  const handleCellClick = (index: number) => {
    if (board[index] !== null || winner) return;

    setBoard((prev) => {
      const newBoard = [...prev];
      newBoard[index] = player;
      return newBoard;
    });
    setPlayer((prev) => (prev === "X" ? "O" : "X"));
  };

  const handleResetClick = () => {
    setBoard(Array(9).fill(null));
    setPlayer("X");
    setWinner("");
  };

  React.useEffect(() => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winningCombos.forEach((combo) => {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
      }
    });
  }, [board]);

  return (
    <div className={styles.wrapper}>
      <div>
        Next player:
        <span className={styles.currentPlayer}> {player}</span>
      </div>
      <a className={styles.reset} onClick={handleResetClick}>
        Reset
      </a>
      <div className={styles.board}>
        {board.map((value, i) => (
          <div
            key={i}
            className={styles.cell}
            onClick={() => handleCellClick(i)}
          >
            {value}
          </div>
        ))}
      </div>
      {winner && (
        <div className={styles.winnerWrapper}>
          🎉 Winner: <span className={styles.winner}>{winner}</span> 🥳
        </div>
      )}
    </div>
  );
};

export default Board;
