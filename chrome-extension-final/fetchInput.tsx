chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "input-change") {
      console.log("User input saved:", message.payload)
      sendResponse({ status: "success" })
    }
  })