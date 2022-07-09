export const currencyFormat = (value: number, currency: string): string => {
  const currencies = {
    usd: '$'
  };
  return `${currencies[currency] || '$'}${value}`;
};