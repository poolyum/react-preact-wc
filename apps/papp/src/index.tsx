import { render } from "preact";

import "./style.css";

import { Button } from "@repo/ui/button";

export function App() {
  return (
    <div>
      <h1>Get Started building Vite-powered Preact Apps </h1>
      <section>
        <Resource
          title="Learn Preact"
          description="If you're new to Preact, try the interactive tutorial to learn important concepts"
          href="https://preactjs.com/tutorial"
        />
        <Resource
          title="Differences to React"
          description="If you're coming from React, you may want to check out our docs to see where Preact differs"
          href="https://preactjs.com/guide/v10/differences-to-react"
        />
        <Resource
          title="Learn Vite"
          description="To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation"
          href="https://vitejs.dev"
        />
      </section>
      <Button appName="1123">
        <span>Click me!</span>
      </Button>
    </div>
  );
}

function Resource(props) {
  return (
    <a href={props.href} target="_blank" className="resource">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
}

render(<App />, document.getElementById("app") ?? document.body);
