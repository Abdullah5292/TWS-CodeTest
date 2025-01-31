import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemList from './pages/itemList';
import AddItem from './pages/addItem';
import UpdateItem from './pages/updateItem';
import DeleteItem from './pages/deleteItem';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/update/:id" element={<UpdateItem />} />
        <Route path="/delete/:id" element={<DeleteItem />} />
      </Routes>
    </Router>
  );
};

export default App;
