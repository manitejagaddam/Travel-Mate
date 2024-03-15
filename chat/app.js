document.addEventListener("DOMContentLoaded", function () {
  const newMsg = document.querySelector(".addmessage");
  const sndBtn = document.querySelector("#send-icon");
  const chatContainer = document.querySelector(".msg-page");

  function getCurrentTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const formattedTime = `${currentDate.toLocaleString()} `; // Add leading zero if minutes < 10
    return formattedTime;
  }

  function sendMessage() {
    let msg = newMsg.value;
    console.log(msg);

    // Create message elements...
    let newMsgContainer = document.createElement("div");
    newMsgContainer.classList.add("outgoing-chats");

    let imgDiv = document.createElement("div");
    imgDiv.classList.add("outgoing-chats-img");
    let img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://img.icons8.com/3d-fluency/94/user-male--v2.png"
    );
    img.setAttribute("width", "50");
    img.setAttribute("height", "50");
    img.setAttribute("alt", "user-male--v2");
    imgDiv.appendChild(img);

    let msgDiv = document.createElement("div");
    msgDiv.classList.add("outgoing-msg");
    let msgInboxDiv = document.createElement("div");
    msgInboxDiv.classList.add("outgoing-chats-msg");
    let msgParagraph = document.createElement("p");
    msgParagraph.textContent = msg;
    let timeSpan = document.createElement("span");
    timeSpan.classList.add("time");
    timeSpan.textContent = getCurrentTime();
    msgInboxDiv.appendChild(msgParagraph);
    msgInboxDiv.appendChild(timeSpan);
    msgDiv.appendChild(msgInboxDiv);

    // Assemble message elements
    newMsgContainer.appendChild(imgDiv);
    newMsgContainer.appendChild(msgDiv);

    // Append the new message to the chat container
    chatContainer.appendChild(newMsgContainer);

    // Scroll to the bottom of the chat container
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Clear input field
    newMsg.value = "";
  }

  // if we press enter button the message will be sent
  sndBtn.addEventListener("click", sendMessage);

  newMsg.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
});
