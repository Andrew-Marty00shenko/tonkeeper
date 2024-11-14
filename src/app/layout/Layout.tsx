import { Outlet } from 'react-router-dom';

import style from './index.module.scss';

import { AccountMenu } from '@/entities/account-menu';
export const Layout = () => {
  const isAuth = localStorage.getItem('isAuth') === 'true';

  return isAuth ? (
    <div className={style.layout}>
      <Outlet />

      <div className={style.accountMenu}>
        <AccountMenu />
      </div>
    </div>
  ) : (
    <Outlet />
  );
};
