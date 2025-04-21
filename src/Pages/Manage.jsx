import { useState } from "react";
import { useWebinar } from "../context/webinarContext";

function Manage() {
  const { webinars } = useWebinar();

  // Some initial tasks to be performed by the user
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy groceries", done: false },
    { id: 2, text: "Finish React project", done: false },
  ]);

  const [newTask, setNewTask] = useState("");

  // Adding a new task/todo to the list
  const handleAddTask = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        text: newTask,
        done: false,
      };
      setTasks([...tasks, task]);
      setNewTask(""); 
    }
  };

  // Toggle task if it is done or not
  const toggleTaskStatus = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  // Deleting a task
  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">📋 Manage Your Day</h1>

      
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">🧠 Life Tasks</h2>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddTask}
            className="bg-green-600 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-100"
          >
            Add
          </button>
        </div>

        
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex items-center justify-between p-3 border rounded-lg ${
                task.done ? "bg-green-50" : "bg-white"
              }`}
            >
              <span
                onClick={() => toggleTaskStatus(task.id)}
                className={`flex-1 cursor-pointer ${
                  task.done ? "line-through text-gray-500" : "text-gray-800"
                }`}
              >
                {task.text}
              </span>
              <button
                onClick={() => removeTask(task.id)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">🎙️ Upcoming Webinars</h2>

        {webinars.length === 0 ? (
          <p className="text-gray-500 italic">No webinars added yet. Try adding one from the Home page!</p>
        ) : (
          <ul className="space-y-4">
            {webinars.map((webinar, index) => (
              <li
                key={index}
                className="p-4 border bg-white rounded-lg shadow-sm"
              >
                <h3 className="font-bold text-lg text-blue-700">
                  {webinar.title}
                </h3>
                <p className="text-gray-600">🕓 {webinar.time}</p>
                {webinar.description && (
                  <p className="text-gray-700 mt-1">{webinar.description}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default Manage;
