export const STEP_WIDTH = 100;

export const STYLES = {
  root: {
    display: 'flex',
    height: '100%',
  },
  container: {
    overflowX: 'hidden',
    maxWidth: '100%',
  },
  steps: {
    display: 'inline-flex',
    flexDirection: 'row',
    transition: 'transform 0.35s',
    textAlign: 'center',
  },
  step: {
    minWidth: '100%',
  },
  currentIndex: {
    fontWeight: 'bold',
  },
};
