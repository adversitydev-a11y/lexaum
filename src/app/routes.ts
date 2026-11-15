import { createBrowserRouter } from "react-router";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { LegalOperations } from "./pages/LegalOperations";
import { Property } from "./pages/Property";
import { Contact } from "./pages/Contact";
import { ThankYou } from "./pages/ThankYou";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "services/legal-operations", Component: LegalOperations },
      { path: "services/property", Component: Property },
      { path: "contact", Component: Contact },
      { path: "thank-you", Component: ThankYou },
      { path: "*", Component: NotFound },
    ],
  },
]);
