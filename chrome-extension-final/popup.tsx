import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("");
  const [refinedPrompt, setRefinedPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  }

  const handleSave = async () => {

    console.log("Sending message to background script");

    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/improve_prompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: data }),
      });

      const result = await response.json();
      
      if (response.ok) {
        setRefinedPrompt(result.improved_prompt);
      } else {
        setRefinedPrompt(`Error: ${result.error}`);
      }
    } catch (error) {
      setRefinedPrompt("Error: No connection to backend");
    } finally {
      setIsLoading(false)
    }
};

  const handleCopy = () => {
    navigator.clipboard.writeText(refinedPrompt).then(()=> {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      style={{ padding: 16}}>
      <h2>
        Welcome to {" "}
        <a href="https://www.plasmo.com" target="_blank">
          PromptPilot!
        </a>{" "}
      </h2>
      <input value ={data} onChange={handleChange} />

      <br />
      <br />
      
      <button onClick={handleSave}> {isLoading ? "Saving..." : "Save Input"} </button>
      
      <br />
      <br />

      <h2> Your refined prompt: </h2>

            <div
        style={{
          width: "90%",
          height: "100px",
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "10px",
          backgroundColor: "#f9f9f9",
          whiteSpace: "pre-wrap",
          overflowY: "auto", 
        }}
      >
        {refinedPrompt || "Your refined prompt will appear here..."}
      </div>

      {refinedPrompt && (
        <>
        <br />
        <button onClick={handleCopy}>{copied ? "Copied!" : "Copy to clipboard"} </button>
        </>
      )}

      <br />

      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}
export default IndexPopup
