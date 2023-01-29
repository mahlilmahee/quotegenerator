
import './App.css';
import Quote from './Quote';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {

  const queryClient = new QueryClient()
  return (
    <div className="App">
        
          
          <QueryClientProvider client={queryClient}>

      <Quote></Quote>
     </QueryClientProvider>

    </div>
  );
}

export default App;
