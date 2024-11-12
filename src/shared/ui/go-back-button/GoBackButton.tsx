import { useLocation, useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import GoBack from './go-back.svg';
export const GoBackButton = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    switch (pathname) {
      case '/add-existing-wallet':
      case '/watch-account': {
        return navigate('/');
      }
    }
  };

  return <ReactSVG src={GoBack} onClick={handleClick} />;
};
