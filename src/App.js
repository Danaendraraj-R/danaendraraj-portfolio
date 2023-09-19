import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  const personalDetails = {
    name: "Danaendraraj R",
    location: "Tiruchengode,India",
    email: "rajdr039@gmail.com",
    availability: "Open for work",
    brand:
      "My unique blend of technical expertise, creative thinking, and background in psychology allows me to approach each project with a deep understanding of the end user's perspective, resulting in highly effective user-centred digital products.",
  };

  return (
    <>
      <Header />
      <Router basename="/danaendraraj-portfolio">
      <AnimatedRoutes personalDetails={personalDetails} />
      </Router>
    </>
  );
}

export default App;
