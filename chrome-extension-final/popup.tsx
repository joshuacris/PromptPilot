import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value)
  }

  const handleSave = () => {
    chrome.runtime.sendMessage({type: "input-change", value: data}, (response) => {
      console.log("Message sent to background script")
    })
  }

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
      <button onClick={handleSave}> Save Input </button>
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}
export default IndexPopup
