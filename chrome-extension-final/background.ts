export {}

console.log("Background script running!");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "input-change") {
      const { value } = message;
      // Store the input in chrome.storage
      chrome.storage.local.set({ userInput: value }, () => {
        console.log("Input saved to storage:", value);
      });
  
      // Optionally send a response back to the popup
      sendResponse({ success: true });
    }
    return true; // Indicate that we want to send a response asynchronously
  }
);
const getInputText = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length === 0 || !tabs[0].id) return;

    chrome.tabs.sendMessage(tabs[0].id, { action: "GET_INPUT_TEXT" }, (response) => {
      if (chrome.runtime.lastError) {
        console.error("Error sending message:", chrome.runtime.lastError.message);
        return;
      }
      console.log("Input text:", response?.text);
    });
  });
};

// Listen for extension icon click (browser action)
//chrome.action.onClicked.addListener(() => {
console.log("Icon clicked. Fetching input...");
getInputText();
//});

chrome.commands.onCommand.addListener((command) => {
  if (command === "test") {
    console.log(`test command!`)
  }
});