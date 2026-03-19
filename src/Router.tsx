import {createBrowserRouter} from "react-router";
import {routes} from "./routes.ts";
import Home from "./ui/Home.tsx";
import ContactForm from "./ui/contact-form/ContactForm.tsx";

export const router = createBrowserRouter([
    {path:routes.ROOT, element:<Home/>},
    {path:routes.CONTACT_FORM, element:<ContactForm/>}
])