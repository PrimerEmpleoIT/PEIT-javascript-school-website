import JustValidate from "just-validate";

const validacionDesktop = new JustValidate("#contact-form");

const formDesktop = document.querySelector("#contact-form");
const formMobile = document.querySelector("#contact-form--celulares");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const nameCelulares = document.querySelector("#name--celulares");
const emailCelulares = document.querySelector("#email--celulares");
const messageCelulares = document.querySelector("#message--celulares");
let submitAvailible = false;

validacionDesktop
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Name is required",
    },
    {
      rule: "minLength",
      value: 4,
    },
    {
      rule: "maxLength",
      value: 30,
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Email is required",
    },
    {
      rule: "email",
      errorMessage: "Email is invalid!",
    },
  ])
  .addField("#message", [
    { rule: "required", errorMessage: "Message is required" },
    {
      rule: "minLength",
      value: 10,
    },
  ])
  .onSuccess((event) => {
    submitAvailible = true;
  });

formDesktop.addEventListener("submit", () => {
  if (submitAvailible) {
    name.value = "";
    email.value = "";
    message.value = "";
  }
});

const validacionMobile = new JustValidate("#contact-form--celulares");
validacionMobile
  .addField("#name--celulares", [
    {
      rule: "required",
      errorMessage: "Name is required",
    },
    {
      rule: "minLength",
      value: 5,
    },
    {
      rule: "maxLength",
      value: 35,
    },
  ])
  .addField("#email--celulares", [
    {
      rule: "required",
      errorMessage: "Email is required",
    },
    {
      rule: "email",
      errorMessage: "Email is invalid!",
    },
  ])
  .addField("#message--celulares", [
    { rule: "required" },
    {
      rule: "minLength",
      value: 10,
    },
  ])
  .onSuccess((event) => {
    submitAvailible = true;
  });

formMobile.addEventListener("submit", () => {
  if (submitAvailible) {
    nameCelulares.value = "";
    emailCelulares.value = "";
    messageCelulares.value = "";
  }
});

export { validacionDesktop, validacionMobile };
