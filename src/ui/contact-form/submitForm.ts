import type { SubmitEvent } from "react";

const SUBMIT_URL =
  "https://questions.greatfrontend.com/api/questions/contact-form";

const submitForm = async (event: SubmitEvent<HTMLFormElement>) => {
  event.preventDefault();
  const form = event.target;

  try {
    if (form.action !== SUBMIT_URL) {
      alert("Incorrect form action value");
      return;
    }
    if (form.method.toLowerCase() !== "post") {
      alert("Incorrect form method value;");
      return;
    }

    const formData = new FormData(form);
    const response = await fetch(SUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });
    const text = await response.text();
    alert(text);
  } catch (error: unknown) {
    if (error instanceof Error) {
      alert(error.message);
      return;
    }
    alert("Unknown Error occurred");
  }
};
export default submitForm;
