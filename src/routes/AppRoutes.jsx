import { Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/Homepage';


function AppRoutes() {
    return (
      <Routes>
      <Route path="/" element={<Homepage/>} />
      

</Routes>
  );
}

export default AppRoutes;