import React from "react";
import ReactDOM from "react-dom";

function TemporaryName() {
  return (
    <div>
      <img src="./react-logo.png" width="40px" />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<TemporaryName />, document.getElementById("root"));

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

import React from "react";
import ReactDOM from "react-dom";

function LoveReact() {
  return (
    <div>
      <h1>Reason why I love React</h1>
      <ul>
        <li>It is easy to learn</li>
        <li>It is is fun to leanr</li>
        <li>It is is something new so I like it!</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<LoveReact />, document.getElementById("root"));

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

import React from "react";
import ReactDOM from "react-dom";

function Page() {
  return (
    <nav>
      <img src="./react-logo.png" width="40px" />
      <h1>Reasons why I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
      <footer> "© 20xx lee development. All rights reserved."</footer>
    </nav>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
