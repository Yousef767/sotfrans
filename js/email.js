const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  btn.value = "Sending...";
  let name = document.querySelector("#name");
  let message = document.querySelector("#message");
  let email = document.querySelector("#email");
  let moblie = document.querySelector("#moblie");
  let type = document.querySelector("#type");
  if (
    name.value != "" &&
    message.value != "" &&
    email.value != "" &&
    message.value != "" &&
    moblie.value != "" &&
    type.value != ""
  ) {
    emailjs.sendForm("service_3y9f9hm", "template_gol89ta", this).then(
      () => {
        name.value;
        message.value;
        email.value;
        message.value;
        moblie.value;
        type.value;
      },
      (err) => {
        btn.value = "Send Email";
        alert(JSON.stringify(err));
      }
    );
    btn.value = "Send Email";
    document.body.innerHTML += `<div class="sent" id="emailMessage">
      <div class="mess">
        <span>Email Sent !</span>
        <img src="../media/icons/true.png" alt="">
      </div>
    </div>`;
    setTimeout(() => {
      let inner = document.getElementById("emailMessage");
      inner.remove();
    }, 3000);
    name.value = "";
    message.value = "";
    email.value = "";
    moblie.value = "";
    type.value = "";
  } else {
    event.preventDefault();
    btn.value = "Send Email";
    document.body.innerHTML += `<div class="sent" id="emailMessage">
      <div class="mess">
        <span>Invalid Inputs Values !</span>
        <img src="../media/icons/error.png" alt="">
      </div>
    </div>`;
    setTimeout(() => {
      let inner = document.getElementById("emailMessage");
      inner.remove();
    }, 3000);
  }
});
