// React Cheatsheet with Explanations

// 1. **Creating a React Component**
// React components can be created as either function components or class components.

// Function Component (Recommended)
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

"export default Welcome;"

// Class Component (Older Style)
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

"export default Welcome;"

// 2. **JSX (JavaScript XML)**
// JSX is a syntax extension that allows you to write HTML-like code inside JavaScript. React then converts this to JavaScript.

"const element = <h1>Hello, world!</h1>;  // Basic JSX"

// Expressions can be embedded in JSX using curly braces:
const name = "John";
"const element = <h1>Hello, {name}</h1>;"  // Embedding expression in JSX

// Conditional rendering in JSX
const isLoggedIn = true;
const greeting = isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>;

// JSX with Functions (Dynamic Content)
const formatDate = (date) => date.toLocaleDateString();
const element = <h1>Today is {formatDate(new Date())}</h1>;

// 3. **Props (Properties)**
// Props are used to pass data from a parent component to a child component.

// Parent component
function App() {
  return <Welcome name="John" />;
}

// Child component receiving props
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// 4. **State**
// The state is used to manage data that can change over time. State can be updated using the `setState` method in class components or `useState` hook in function components.

// Class Component with State
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.increment}>Click me</button>
      </div>
    );
  }
}

// Function Component with useState Hook
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
}

// 5. **Event Handling**
// React provides a way to handle events such as click, change, submit, etc.

// Handling a button click event
function Button() {
  const handleClick = () => {
    alert('Button was clicked');
  };

  return <button onClick={handleClick}>Click Me</button>;
}

// 6. **Handling Forms**
// React provides controlled components, where the form input's value is controlled by React state.

import React, { useState } from 'react';

function NameForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    alert('A name was submitted: ' + name);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

// 7. **Conditional Rendering**
// You can render different UI elements based on conditions.

function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return <button onClick={handleLogoutClick}>Log Out</button>;
  }

  return <button onClick={handleLoginClick}>Log In</button>;
}

// 8. **Lists and Keys**
// You can render lists of elements in React, where each element must have a unique "key" prop.

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );
  return <ul>{listItems}</ul>;
}

// Example of using NumberList:
const numbers = [1, 2, 3, 4, 5];
<NumberList numbers={numbers} />;

// 9. **React Fragments**
// React fragments allow you to return multiple elements without adding extra nodes to the DOM.

function FragmentExample() {
  return (
    <>
      <h1>Heading</h1>
      <p>Paragraph</p>
    </>
  );
}

// 10. **useEffect Hook** (For Side Effects)
// The `useEffect` hook is used to perform side effects like fetching data or updating the DOM after a component renders.

import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // This effect runs after every render
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

// 11. **useContext Hook**
// The `useContext` hook allows you to access values in the React context, avoiding prop drilling.

import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return <div>The theme is {theme}</div>;
}

// 12. **Context API**
// The React Context API allows you to share values between components without passing props explicitly.

"const ThemeContext = React.createContext('light');"

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return <div>The theme is {theme}</div>;
}

// 13. **React Router** (Routing)
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Basic Routing with React Router
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact>
          <h2>Home Page</h2>
        </Route>
        <Route path="/about">
          <h2>About Page</h2>
        </Route>
      </div>
    </Router>
  );
}

export default App;
