import { Outlet, Navigate } from 'react-router';

const ProtectedRoutes = () => {
  let userRol = 'admin'

  return (
    <>
      {
        userRol === 'admin' ? <Outlet /> : <Navigate to='/' />
      }
    </>
  );
};

export { ProtectedRoutes };
