import './App.css'
import {ErrorProvider} from "./context/ErrorProvider.jsx";
import DummyErrorButton from "./components/ui/DummyErrorButton.jsx";
import MessageInput from './components/ui/MessageInput.jsx';


function App() {
  return (
    <>
    <ErrorProvider>
      <div style={{ position: "fixed", top: 16, left: 16}}>
        <DummyErrorButton />
      </div>
    </ErrorProvider>

    <MessageInput />
    </>
  );
}

export default App;
