import style from './index.module.scss';
import { Routes } from './routes';
export const App = () => {
  return (
    <div className={style.app}>
      <Routes />
    </div>
  );
};
