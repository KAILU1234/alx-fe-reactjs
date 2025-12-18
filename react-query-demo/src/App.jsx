import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
