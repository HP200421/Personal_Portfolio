export default function YearButton({ year, currentYear, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-4 py-2 text-sm font-medium transition duration-150 ${
        year === currentYear
          ? "bg-blue-500 text-white"
          : "bg-gray-100  text-black"
      }`}
      title={`View Graph for the year ${year}`}
    >
      {year}
    </button>
  );
}
