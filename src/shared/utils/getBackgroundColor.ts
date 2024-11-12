import { Styles } from '../types';

export const getBackgroundColor = (bg?: Styles['bg']) => {
  switch (bg) {
    case 'blue': {
      return ' #45aef5';
    }
    case 'gray': {
      return '#1D2633';
    }
  }
};
