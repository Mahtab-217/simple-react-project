import Example from "./Example";
import Hero from "./Heor";
import Nav from "./Nav";

function App(){
  return (
    <>
  
    <h1 className="text-4xl text-red-900 text-center font-bold">Hello There I'm Tailwind Css</h1>
    <Hero text="This is coming from parent"/>
    <Example/>
    <Nav/>
    </>
  
  )
}
export default App;