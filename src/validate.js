import JustValidate from "just-validate";
import { config } from "webpack";

const validation = new JustValidate("#contact-form");
console.log("acutalicse");

validation.addField("#name", [
  {
    rule: "minLength",
    value: 3,
  },
  {
    rule: "maxLength",
    value: 30,
  },
]);

validation.addField("#email", [
  {
    rule: "required",
    errorMessage: "Email is required",
  },
  {
    rule: "email",
    errorMessage: "Email is invalid!",
  },
]);

validation.addField("#message", [{ rule: "required" }]);

export default validation;
