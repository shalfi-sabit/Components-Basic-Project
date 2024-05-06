import keyConceptsImage from "./assets/images/key-concepts.png";
import componentsImage from "./assets/images/components.png";
import stateImage from "./assets/images/state.png";
import eventsImage from "./assets/images/events.png";
import Concept from "./components/Concept/Concept";
import Card from "./components/UI/Card";

const concepts = [
  {
    title: "Components",
    image: componentsImage,
    description:
      "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
  },
  {
    title: "State",
    image: stateImage,
    description:
      "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
  },
  {
    title: "Events",
    image: eventsImage,
    description:
      "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
  },
];

function App() {
  return (
    <div>
      <header>
        <Concept
          img={keyConceptsImage}
          title={"Key React Concepts"}
          description={"Selected key React concepts you should know about"}
        />
      </header>
      <ul id="concepts">
        {concepts.map((concept, idx) => (
          <Card className="concept" key={idx}>
            <Concept
              img={concept.image}
              title={concept.title}
              description={concept.description}
            />
          </Card>
        ))}
      </ul>
    </div>
  );
}

export default App;
