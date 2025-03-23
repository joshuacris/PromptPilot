import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("");
  const [promptType, setPromptType] = useState("EVERYDAY");
  const [refinedPrompt, setRefinedPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  }

  const handleSaveInput = async () => {

      console.log("Sending message to background script");

      setIsLoading(true);

      try {
        const response = await fetch("http://127.0.0.1:5000/improve_prompt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ input: data , option: promptType}),
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

  const handleSaveEducational = async () => {
    setPromptType("EDUCATIONAL");

  }

  const handleSaveProblemSolving = async () => {
    setPromptType("PROBLEM_SOLVING");
  }

  const handleSaveEveryday = async () => {
    setPromptType("EVERYDAY");
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(refinedPrompt).then(()=> {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      style={{ 
      right: 50,
      width: "400px",
      height: "500px",
      borderRadius: "15px",
      padding: 30,
      background: "linear-gradient(135deg,rgb(81, 125, 190) 0%,rgb(136, 52, 192) 100%)" // Changed to gradient
      }}>
      <h2 style={{ display: "block", textAlign: "center", color: "#fff" }}> 
      Welcome to PromptPilot!{" "}
      </h2 >
      <input  placeholder="Type your prompt here..."  style={{ display: "block", textAlign: "center" }} value ={data} onChange={handleChange} />

      <br />
      <br />
      
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
      {/* Top button - centered */}
      <button
        onClick={handleSaveInput}
        style={{
          backgroundColor: "#007BFF",
          color: "#fff",
          fontWeight: "bold",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#007BFF")}
      >
        {isLoading ? "Saving..." : "Save Input"}
      </button>

      {/* Row of three buttons */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={handleSaveEducational}
          style={{
            backgroundColor: "#007BFF",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#007BFF")}
        >
          {"Educational"}
        </button>
        <button
          onClick={handleSaveProblemSolving}
          style={{
            backgroundColor: "#007BFF",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#007BFF")}
        >
          {"Problem Solving"}
        </button>
        <button
          onClick={handleSaveEveryday}
          style={{
            backgroundColor: "#007BFF",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#007BFF")}
        >
          {"Everyday"}
        </button>
      </div>
    </div>


      <h2 style={{ display: "block", textAlign: "center", color: "#fff" }}> Your refined prompt: </h2>

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

      <a style={{ display: "block", textAlign: "center", color: "#fff" }} href="https://docs.plasmo.com" target="_blank">
      View Docs
      </a>
    </div>
  )
}
export default IndexPopup