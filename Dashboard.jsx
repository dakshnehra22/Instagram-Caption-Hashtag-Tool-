import { useState } from "react";

function Dashboard() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState(null);

  const generate = async () => {
    const res = await fetch("http://localhost:5000/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic })
    });
    setResult(await res.json());
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Instagram Caption Tool</h1>
      <input
        className="border p-2 mt-4"
        placeholder="Enter topic (fitness, travel...)"
        onChange={e => setTopic(e.target.value)}
      />
      <button onClick={generate} className="bg-black text-white p-2 ml-2">
        Generate
      </button>

      {result && (
        <div className="mt-4">
          <p><b>Caption:</b> {result.caption}</p>
          <p><b>Hashtags:</b> {result.hashtags}</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
