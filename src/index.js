import ReactDOM from "react-dom/client";
import VaultList from "./VaultList";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="column column-50 column-offset-25">
          <h1>akord-bootstrap</h1>
          <p>To quickly get started with AkordJs, clone this repo and build.  In the repo, we've setup the dependencies you'll need for crypto to work.</p>
          <p>For more information on AkordJS:</p>
          <ul>
            <li>
              <a href="https://github.com/Akord-com/akord-js">
                <code>https://github.com/Akord-com/akord-js</code>
              </a>
            </li>
            <li>
              <a href="https://github.com/Akord-com/akord-bootstrap">
                <code>https://github.com/Akord-com/akord-bootstrap</code>
              </a>
            </li>
            <li>
              <a href="https://docs.akord.com/learn/technical-litepaper">
                <code>Akord Docs and Litepaper</code>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="column column-50 column-offset-25">
          <VaultList />
        </div>
      </div>
    </div >
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
