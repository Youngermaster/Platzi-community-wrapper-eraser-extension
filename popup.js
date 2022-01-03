// When the button is clicked, inject removeCommunityWrapper into current page
communityWrapper.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: removeCommunityWrapper,
  });
});

function removeCommunityWrapper() {
  let wrapperClass = "MaterialView-community";

  let div = document.getElementsByClassName(wrapperClass);
  div[0].parentNode.removeChild(div[0]);

  console.log("MaterialView-community-wrapper succesfully removed");
}
