//for you and recents cards

export default function Card({ image, title, description, status }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition-all duration-300 p-2 w-64">
      <div className="relative rounded-xl overflow-hidden h-26 mb-2">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        {status && (
          <span className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
            {status}
          </span>
        )}
      </div>
      <h3 className="font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        {description}
      </p>
    </div>
  );
}
