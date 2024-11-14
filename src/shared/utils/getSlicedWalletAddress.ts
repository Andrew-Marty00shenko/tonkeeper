export const getSlicedWalletAddress = (wallet: string) => {
  if (wallet.length < 8) {
    return 'Input string should have at least 8 characters.';
  }

  const firstFour: string = wallet.slice(0, 4);
  const lastFour: string = wallet.slice(-4);

  return `${firstFour}...${lastFour}`;
};
