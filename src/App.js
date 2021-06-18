import './App.css';
import { PostsListShowMore } from './components/PostsListShowMore';
import { PostsListPagination } from './components/PostsListPagination';


function App() {
  return (
    <div className="App">
      <PostsListPagination />

      {/*<PostsListShowMore />*/}
    </div>
  );
}

export default App;
