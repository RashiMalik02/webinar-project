import { useState } from "react";
import { Card } from "../components/components/card";
import { Greeting } from "../components/components/greeting";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import meImg from "../components/components/me.jpg";
import { useWebinar } from "../context/webinarContext";

export default function Home() {
  const { webinars, setWebinars } = useWebinar();

  const [form, setForm] = useState({
    title: "",
    time: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const addWebinar = () => {
    const { title, time } = form;
    if (!title.trim() || !time.trim()) return;

    setWebinars([...webinars, { title, time }]);
    setForm({ title: "", time: "" });
  };

  return (
    <div className="flex flex-wrap p-4 gap-6">

    {/*user profile card (responsive - not visible on mobile screen)*/}
      <div className="hidden md:block md:w-1/4">
        <Card
          image={meImg}
          name="Rashi Malik"
          gmail="rashi.malik@gmail.com"
          contact="8168421270"
          state="Karnataka"
          country="India"
        />
      </div>

      <div className="flex-1 min-w-[300px]">
        <Greeting name="Rashi Malik" />

        <div className="flex flex-col lg:flex-row gap-6 mt-10">

          {/*list of webinars*/}
          <div className="w-full lg:w-1/2">
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faCalendarPlus} className="text-blue-700" />
                Today's Webinars
              </h2>

              {webinars.length === 0 ? (
                <p className="text-gray-600">No webinars added yet.</p>
              ) : (
                webinars.map((webinar, index) => (
                  <div
                    key={index}
                    className="bg-white shadow rounded-lg p-4 border mb-4"
                  >
                    <h3 className="text-lg font-semibold text-blue-700">{webinar.title}</h3>
                    <p className="text-sm text-gray-600">{webinar.time}</p>
                  </div>
                ))
              )}
            </section>
          </div>

          {/*form for scheduling new webinars */}
          <div className="w-full lg:w-1/2">
            <section>
              <h2 className="text-xl font-bold mb-2">Add a Webinar</h2>
              <div className="bg-white shadow rounded-lg p-4 border space-y-3">
                <input
                  type="text"
                  name="title"
                  placeholder="Webinar Title"
                  value={form.title}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
                <input
                  type="text"
                  name="time"
                  placeholder="Time (e.g. 5:00 PM - 6:00 PM)"
                  value={form.time}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
                <button
                  onClick={addWebinar}
                  className="bg-green-600 text-blue-700 px-4 py-2 rounded hover:bg-blue-100 transition"
                >
                  Add Webinar
                </button>
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}
