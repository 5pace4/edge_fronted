import MyFirstComponents from './components/MyFirstComponents';
import SecondComponents from './components/SecondComponents';
import ThirdComponents from './components/ThirdComponents';

function App() {
  const student = {
    name: 'Tofayel',
    id: '1904005',
    email: 'tofayl@gmail.com',
    fav_foods: ['biriyani', 'apple juice', 'lichi'],
  };
  const products = [
    {
      product_id: 100,
      name: 'bag',
      color: ['red', 'green'],
    },
    {
      product_id: 101,
      name: 'shirt',
      color: ['black', 'blue'],
    },
    {
      product_id: 102,
      name: 'pant',
      color: ['black', 'grey'],
    },
  ];
  function createProduct(id, name, color) {
    return { id, name, color };
  }
  const rows = [
    createProduct(101, 'shirt', ['red', 'green']),
    createProduct(101, 'shirt', ['red', 'green']),
    createProduct(101, 'shirt', ['red', 'green']),
    createProduct(101, 'shirt', ['red', 'green']),
  ];
  return (
    <div>
      <MyFirstComponents fun={student}></MyFirstComponents>
      <SecondComponents prods={products}></SecondComponents>
      <ThirdComponents tableData={rows}></ThirdComponents>
    </div>
  );
}

export default App;
