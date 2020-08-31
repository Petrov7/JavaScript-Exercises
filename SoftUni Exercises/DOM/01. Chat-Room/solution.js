function solve() {
   const inputText = document.getElementById("chat_input");
   const btn = document.getElementById("send");
   const message = document.getElementById("chat_messages");

   btn.addEventListener("click", () => {
      const div = document.createElement('div');
      div.innerHTML = inputText.value;
      //div.className = "message my-message";
      div.classList.add("message", "my-message");

      message.appendChild(div);
      inputText.value = '';
   });
}


