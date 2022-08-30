import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import HOCApp from './components/HOC';
import Header from './components/header/header';
import UserDetail from './components/userList/userDetail';
import UserListing from './components/userList/userListing';


function App() {
  return (
    <div className="App">
      {/* <HOCApp/> */}
      <Router>
          <Header/>
              <Routes>
                  <Route path='/' exact element={< UserListing/> }/>
                  <Route path='/user/:userId' element={<UserDetail/>} />
                  <Route>404 Not Found</Route>

              </Routes>
        </Router>
     
    </div>
  );
}

export default App;
