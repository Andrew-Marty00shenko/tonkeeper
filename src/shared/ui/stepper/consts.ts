export const STEP_WIDTH = 380;

export const STYLES = {
  root: {
    display: 'flex',
    height: '100%',
  },
  container: {
    overflowX: 'hidden',
    maxWidth: STEP_WIDTH,
  },
  steps: {
    display: 'inline-flex',
    flexDirection: 'row',
    transition: 'transform 0.35s',
    textAlign: 'center',
  },
  step: {
    width: STEP_WIDTH,
  },
  currentIndex: {
    fontWeight: 'bold',
  },
};
