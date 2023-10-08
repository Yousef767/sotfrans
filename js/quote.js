const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let fname = document.querySelector("#fname");
  let lname = document.querySelector("#lname");
  let organization = document.querySelector("#organization");
  let country = document.querySelector("#country");
  let email = document.querySelector("#email");
  let title = document.querySelector("#title");
  let pDescription = document.querySelector("#pDescription");
  let wordCount = document.querySelector("#wordCount");
  let Requested = document.querySelector("#Requested");
  let url = document.querySelector("#url");
  btn.value = "Sending...";
  if (
    fname.value != "" &&
    lname.value != "" &&
    organization.value != "" &&
    country.value != "" &&
    email.value != "" &&
    title.value != "" &&
    pDescription.value != "" &&
    wordCount.value != "" &&
    Requested.value != "" &&
    url.value != ""
  ) {
    emailjs.sendForm("service_3y9f9hm", "template_2zkrnh4", this).then(
      () => {
        fname.value;
        lname.value;
        organization.value;
        country.value;
        email.value;
        title.value;
        pDescription.value;
        wordCount.value;
        Requested.value;
        url.value;
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
    fname.value = "";
    lname.value = "";
    organization.value = "";
    country.value = "";
    email.value = "";
    title.value = "";
    pDescription.value = "";
    wordCount.value = "";
    Requested.value = "";
    url.value = "";
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
