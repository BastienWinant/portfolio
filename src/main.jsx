import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as ChakraProvider } from "@/components/ui/provider";
import { NavProvider } from "@/providers/navContext/NavProvider.jsx";
import App from "./App.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <NavProvider>
        <App />
      </NavProvider>
    </ChakraProvider>
  </StrictMode>,
)
