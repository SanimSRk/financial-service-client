import { Outlet } from 'react-router-dom';
import Sitever from '../Pages/Sitever';

const MainLayout = () => {
  return (
    <div>
      <Sitever></Sitever>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
