import React, { useState } from 'react';

export default function InteractiveForm() {
  const [tweet, setTweet] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const description = e.target.description.value;

    setLoading(true);
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description }),
    });

    const data = await response.json();
    setLoading(false);

    if (data.tweet) {
      setTweet(data.tweet);
    } else {
      console.error(data.error);
    }
  };

  const handleCopy = () => {
    if (tweet) {
      navigator.clipboard.writeText(tweet);
      alert('Tweet copied!');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          name="description"
          placeholder="Write your idea here..."
          rows={5}
        />
        <button type="submit" disabled={loading}>
          Submit
        </button>
      </form>
      {loading && <p>Generating tweet...</p>}
      {tweet && (
        <div>
          <p>{tweet}</p>
          <button onClick={handleCopy}>Copy</button>
        </div>
      )}
    </div>
  );
}
