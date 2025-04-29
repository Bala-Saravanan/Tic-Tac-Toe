import { useEffect, useState } from "react";
import Cell from "./Cell";

function Board() {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);
  const [state, setState] = useState<Record<number, string>>({});
  const [isWin, setIsWin] = useState(false);
  const [count, setCount] = useState(1);

  const handleClick = (index: number) => {
    if (cells[index]) return;

    const newCells = [...cells];
    newCells[index] = turn ? "X" : "O";
    setCells(newCells);
    setTurn(!turn);
    setState({
      ...state,
      [index]: turn ? "X" : "O",
    });
    setCount(count + 1);
  };
  useEffect(() => {
    if (
      (state[0] === state[1] &&
        state[1] === state[2] &&
        state[0] !== undefined) ||
      (state[3] === state[4] &&
        state[4] === state[5] &&
        state[3] !== undefined) ||
      (state[6] === state[7] &&
        state[7] === state[8] &&
        state[6] !== undefined) ||
      (state[0] === state[3] &&
        state[3] === state[6] &&
        state[0] !== undefined) ||
      (state[1] === state[4] &&
        state[4] === state[7] &&
        state[1] !== undefined) ||
      (state[2] === state[5] &&
        state[5] === state[8] &&
        state[2] !== undefined) ||
      (state[0] === state[4] &&
        state[4] === state[8] &&
        state[0] !== undefined) ||
      (state[2] === state[4] && state[4] === state[6] && state[2] !== undefined)
    ) {
      setIsWin(true);
    }
  }, [state]);

  return (
    <div className="flex flex-col justify-center items-center gap-10 h-screen">
      <p className="text-5xl font-bold text-blue-400">
        Tic <span className="text-red-400">Tac</span> Toe
      </p>
      <div className="grid grid-cols-3 gap-5">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            value={cell}
            onClick={() => handleClick(index)}
            win={isWin}
          />
        ))}
      </div>
      <div className="text-4xl font-bold">
        {count % 2 === 0 && isWin ? (
          <p className="text-red-400">Red Wins!</p>
        ) : (
          <></>
        )}
        {count % 2 !== 0 && isWin ? (
          <p className="text-blue-400">Blue Wins!</p>
        ) : (
          <></>
        )}
        {count === 10 && !isWin ? <p>Draw!</p> : <></>}
      </div>
      {isWin || count === 10 ? <p>Press Ctrl + R to play again</p> : <></>}
    </div>
  );
}

export default Board;
