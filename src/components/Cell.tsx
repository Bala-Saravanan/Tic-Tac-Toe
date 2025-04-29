type CellProps = {
  value: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  win?: boolean;
};

function Cell({ value, onClick, win = false }: CellProps) {
  return (
    <button
      disabled={win}
      className={`w-20 aspect-square outline-10 outline-black text-4xl font-bold cursor-pointer ${
        value === "X" ? "text-red-400" : "text-blue-400"
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Cell;
