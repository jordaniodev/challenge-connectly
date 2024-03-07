import { Layout } from "./components/Layout";
import { EditMessage } from "./components/EditMessage";
import { MessagePreview } from './components/MessagePreview/index';
function App() {
  return (
    <>
      <Layout pageTitle="Create a Campaign">
        <>
          <EditMessage />
          <div className="canvas">
            <MessagePreview />
          </div>
        </>
      </Layout>
    </>
  );
}

export default App;
