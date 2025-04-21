import { useEffect, useState } from "react";

function Webinars() {
  const [webinars, setWebinars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add fetching webinars
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => {
        setWebinars(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">🎙 Upcoming Webinars</h1>
      <p className="text-gray-600 mb-6">
        Stay in the loop with the latest sessions tailored just for you.
      </p>

      {loading ? (
        <p className="text-gray-500 animate-pulse">Fetching your webinars...</p>
      ) : (
        <ul className="space-y-4">
          {webinars.map((webinar) => (
            <li
              key={webinar.id}
              className="bg-white p-5 border rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {webinar.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{webinar.body}</p>
              <div className="text-xs text-gray-400 mt-2">⏰ Time: 5:00 PM</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Webinars;
