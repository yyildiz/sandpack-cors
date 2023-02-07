import logo from "./logo.svg";
import "./App.css";
import {
  Sandpack,
  SandpackCodeEditor,
  SandpackConsole,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";

function App() {
  return (
    <div className="App">
      <main>
        <SandpackProvider template="react">
          <SandpackLayout>
            <SandpackPreview />
            <SandpackCodeEditor />
            <SandpackConsole />
          </SandpackLayout>
        </SandpackProvider>
      </main>
    </div>
  );
}

export default App;
