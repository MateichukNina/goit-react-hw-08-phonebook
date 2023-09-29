import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { AppBar } from './AppBar';

export const Layout = () => {
  <div>
    <AppBar/>
    <main>
      <Suspense>
        <Outlet/>
      </Suspense>
    </main>
  </div>
}