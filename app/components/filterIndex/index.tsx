export default function FilterIndex({ filter }: { filter: string }) {
  const arrowDirection = filter === "asc" ? "rotate-180" : "";
  return (
    <svg
      fill="#000000"
      className={`fill-gray-500 transition-all duration-300 dark:fill-gray-400 ${arrowDirection}`}
      height="14px"
      width="14px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 490 490"
    >
      <polygon points="245,456.701 490,33.299 0,33.299 " />
    </svg>
  );
}
