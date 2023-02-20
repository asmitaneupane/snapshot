import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Container from './components/Container';
import Header from './components/Header';
import Item from './components/Item'
import NotFound from './components/NotFound';
import Search from './components/Search';
import './index.css'

function App(searchTerm) {

  // Prevent page reload, clear input, set URL and push history on submit
  const handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history(url);
  };

  const searchInput = props => {
    searchTerm = props.match.params.searchInput;
    return searchTerm;
  }

  const setHistory = props => {
    const history = props.history;
    return history;
  }

  return (

    <Router>
      <div className="container">
        <Header 
        handleSubmit={handleSubmit}
        history={setHistory}
        />
        <Routes>
          {/* <Route exact path='/' element={<Navigate replace to='/mountain' />} /> */}
          <Route exact path='/' element={<Item searchTerm="mountain" />} />
          <Route exact path='/mountain' element={<Item searchTerm="mountain" />} />
          <Route exact path='/beaches' element={<Item searchTerm="beach" />} />
          <Route exact path='/birds' element={<Item searchTerm="bird" />} />
          <Route exact path='/food' element={<Item searchTerm="food" />} />
          <Route path="/search/:searchInput" element={<Search searchTerm={searchInput} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
