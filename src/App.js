import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from './GlobalState';
import Header from './component/headers/Header';
import Pages from './component/mainpages/Pages';


function App() {
  return (
   <>
     <DataProvider>
      <Router>
        <div className='x'>
          <Header />
          <Pages />
        </div>
      </Router>
     </DataProvider>
   </>
  )
}

export default App;
