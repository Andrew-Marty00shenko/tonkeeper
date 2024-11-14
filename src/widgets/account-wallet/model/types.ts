// TODO: изменить после интеграции
export type Token = {
  image: string;
  name: string;
  exchangeRate: {
    rate: string;
    value: string;
  };
  balance: {
    usd: number;
    count: number;
  };
};
