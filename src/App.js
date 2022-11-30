import ContentWrapper from "./components/ContentWrapper";
import Sidebar from "./components/Sidebar";
import Head from "./components/Head";

function App() {
  return (
    <>
      <Head />
      <div id="wrapper">
        <Sidebar />
        <ContentWrapper />
      </div>
    </>
  );
}

export default App;
