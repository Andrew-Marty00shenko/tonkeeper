import { useLocation, useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import GoBack from './go-back.svg';
export const GoBackButton = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    switch (pathname) {
      case '/add-existing-wallet':
      case '/watch-account':
      case '/generated-phase': {
        return navigate('/');
      }
      case '/check-generated-phase': {
        return navigate('/generated-phase');
      }
    }
  };

  return <ReactSVG src={GoBack} onClick={handleClick} />;
};
