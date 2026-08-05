"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function handleGenerate() {
    setLoading(true);
    setResult("");

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    setResult(data.questions || "No result");
    setLoading(false);
  }

  return (
    <main style={{ maxWidth: 800, margin: "40px auto", padding: 24, fontFamily: "sans-serif" }}>
      <h1>StudyPilot</h1>
      <p>Upload your study material and get practice questions instantly.</p>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste text from a PDF or textbook here..."
        style={{ width: "100%", minHeight: 180, padding: 12, marginTop: 16 }}
      />

      <button
        onClick={handleGenerate}
        disabled={loading || !text.trim()}
        style={{ marginTop: 12, padding: "10px 16px", cursor: "pointer" }}
      >
        {loading ? "Generating..." : "Generate questions"}
      </button>

      {result && (
        <pre style={{ whiteSpace: "pre-wrap", marginTop: 24, padding: 16, background: "#f4f4f4" }}>
          {result}
        </pre>
      )}
    </main>
  );
}
