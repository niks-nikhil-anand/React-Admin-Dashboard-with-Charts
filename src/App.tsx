import  { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './component/Loader.tsx';

const Dashboard = lazy(() => import("./pages/Dashboard.tsx"));
const Product = lazy(() => import("./pages/Product.tsx"));
const Transaction = lazy(() => import("./pages/Transaction.tsx"));
const Customer = lazy(() => import("./pages/Customer.tsx"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/product' element={<Product />} />
          <Route path='/admin/customer' element={<Customer />} />
          <Route path='/admin/transaction' element={<Transaction />} />   


          {/* Charts*/}



          {/* Apps*/}


        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;