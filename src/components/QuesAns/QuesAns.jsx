import React from "react";
import './QuesAns.css'

const QuesAns = () => {
  return (
    <div className="quesans">
      <div>
        <h1>Different between 'props' and 'state'.</h1>
        <p>
          <ul>
            <li>
              <span>props</span> are read-only data that are passed into a
              component by its parent. They are used to configure a component
              and provide information it needs to render. Once passed into a
              component, props cannot be modified within the component.
            </li>
            <li>
              <span>state</span> on the other hand, is used to manage data that
              can change within a component. Unlike props, state is mutable and
              can be updated within the component using the setState method.
              When state is updated, React will automatically re-render the
              component to reflect the updated data.{" "}
            </li>
          </ul>
        </p>
        <br />
        <br />
        <h1>How does react works?</h1>
        <p>
          <span>useState</span> is a built-in hook in React that allows
          functional components to manage state. useState hook returns an array
          with two elements: the current state value and a function that can be
          used to update the state value. <br />
          The count state value is displayed in the component's rendering, and
          the setCount function is used to update the state value when the
          "Increment" button is clicked.
        </p>
        <br />
        <br />
        <h1>What is useEffect?</h1>
        <p>
          useEffect is a built-in hook in React that allows functional
          components to manage side effects, such as fetching data from an API,
          updating the document title, or subscribing to a WebSocket connection.
          The useEffect hook takes two arguments: a function that performs the
          side effect, and an optional array of dependencies that determine when
          the side effect should be executed. The function passed to useEffect
          will be executed after every render of the component, unless the
          dependencies have not changed.
        </p>
        <br />
        <br />
        <h1>How does react works?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It uses a
          component-based approach, where each component is responsible for
          rendering a part of the UI, and can be reused across different parts
          of the application. When a user interacts with a React application,
          the underlying data changes and triggers a re-render of the affected
          components. React then compares the new and old versions of the
          component tree and updates only the necessary parts of the DOM.
        </p>
      </div>
    </div>
  );
};

export default QuesAns;
