import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import POC from './POC/POC'


const AppLayout = () => {

  console.log('<Header />', <Header />)

  return (
    <div className="app">
      <Header />
      <Body />
      <POC />
    </div>
  );
};

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(<AppLayout />);

