import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.tsx";

// biome-ignore lint/style/noNonNullAssertion: ignore
createRoot(document.getElementById("root")!).render(<App />);
