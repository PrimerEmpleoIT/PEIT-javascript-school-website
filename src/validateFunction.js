import JustValidate from "just-validate";

const validacionDesktop = new JustValidate("#contact-form");
console.log("just-validate funciona");

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
    { rule: "required", errorMessage: "Cant send empty message" },
  ]);

const validacionMobile = new JustValidate("#contact-form--celulares");
validacionMobile
  .addField("#name", [
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
  .addField("#message", [{ rule: "required" }]);

export { validacionDesktop, validacionMobile };
