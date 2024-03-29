import Layout from "./components/layout.jsx";
import Home from "./pages/Home.jsx";

import('./style/reset.css');
import('./style/App.css');
import('./style/index.css');

export default function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
