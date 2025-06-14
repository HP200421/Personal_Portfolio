import duckImage from "../assets/images/searching-duck.gif"

export default function EmptyState({ value, title, icon, message }) {
  return (
    <div className="w-full flex flex-col items-center text-center bg-zinc-100 dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-700 rounded-md px-6 py-8">
      <div className="mb-6 text-4xl text-zinc-500">
        {icon || (
          <img src={duckImage} width={80} height={80} alt="Searching duck" />
        )}
      </div>
      <h3 className="font-bold text-xl mb-3">{title ?? `No ${value} Found`}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm">
        {message ??
          `There are no ${
            value && value.toLowerCase()
          } available at this time. Please check back later.`}
      </p>
    </div>
  );
}
