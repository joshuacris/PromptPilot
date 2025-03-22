import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("");
  const [refinedPrompt, setRefinedPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
        setRefinedPrompt(result.refinedPrompt);
      } else {
        setRefinedPrompt(`Error: ${result.error}`);
      }
    } catch (error) {
      setRefinedPrompt("Error: No connection to backend");
    } finally {
      setIsLoading(false)
    }
};

  return (
    <div
      style={{ padding: 16}}>
      <h2>
        Welcome to your{" "}
        <a href="https://www.plasmo.com" target="_blank">
          Plasmo
        </a>{" "}
        Extension!
      </h2>
      <input value ={data} onChange={handleChange} />

      <br />
      <br />
      
      <button onClick={handleSave}> {isLoading ? "Saving..." : "Save Input"} </button>
      
      <br />
      <br />

      <h2> Your refined prompt: </h2>

            {/* This is the empty box to display the output */}
            <div
        style={{
          width: "90%",
          height: "100px", // Adjust height to your preference
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "10px",
          backgroundColor: "#f9f9f9",
          whiteSpace: "pre-wrap", // Preserve formatting of output text
          overflowY: "auto", // Allow scrolling if the content overflows
        }}
      >
        {refinedPrompt || "Your refined prompt will appear here..."} {/* Display output or placeholder */}
      </div>

      <br />
      <br />


      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}
export default IndexPopup
