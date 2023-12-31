import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { AppBar } from './AppBar';

export const Layout = () => {
  return(
  <div>
    <AppBar/>
    <main>
      <Suspense fallback={null}>
        <Outlet/>
      </Suspense>
    </main>
  </div>)
}