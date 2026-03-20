import { createBrowserRouter } from "react-router";
import { routes } from "./routes.ts";
import Home from "./ui/Home.tsx";
import ContactForm from "./ui/contact-form/ContactForm.tsx";
import AccordionApp from "./ui/accordion/App.tsx";

export const router = createBrowserRouter([
  { path: routes.ROOT, element: <Home /> },
  { path: routes.CONTACT_FORM, element: <ContactForm /> },
  { path: routes.ACCORDION, element: <AccordionApp /> },
]);
