import Header from "./components/Header";
import initialEmails from "./data/emails";
import { useState } from "react";

import "./styles/App.css";

function App() {
  const [emails, setEmails] = useState(initialEmails);

  const toggleRead = (id) => {
    const newEmails = emails.map((email) => {
      if (email.id === id) {
        return { ...email, read: !email.read };
      }
      return email;
    });
    setEmails(newEmails);
    console.log(newEmails);
  };

  const toggleStarred = (id) => {
    const newEmails = emails.map((email) => {
      return email.id === id ? { ...email, starred: !email.starred } : email;
    });
    setEmails(newEmails);
    console.log(newEmails);
  };

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            
          >
            <span className="label">Inbox</span>
            <span className="count">{initialEmails.length}</span>
          </li>
          <li
            className="item"
            
          >
            <span className="label">Starred</span>
            <span className="count"></span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {emails.map((email) => (
            <li
              className={`email ${email.read ? 'read' : 'unread'}`}
              key={email.id}
            >
              <div className="select">
                <input
                  className="select-checkbox "
                  type="checkbox"
                  checked={email.read}
                  onChange={() => toggleRead(email.id)}
                />
              </div>
              <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                  checked={email.starred}
                  onChange={() => toggleStarred(email.id)}
                />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
