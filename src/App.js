import About from "./views/About";
import Contact from "./views/Contact";
import Header from "./views/Header";
import Home from "./views/Home";
import Skills from "./views/Skills";
import Works from "./views/Works";

function App() {
  return (
    <div className="font-vol">
      <Header />

      <Home />

      <About />

      <Skills />

      <Works />

      <Contact />
    </div>
  );
}

export default App;

export const LinkedInUrl =
  "https://www.linkedin.com/in/akshay-bilagi-546a0a196/";
export const GithubUrl = "https://github.com/akshay22bv";
export const facebookUrl = "https://www.facebook.com/akshay.bilagi.98";
