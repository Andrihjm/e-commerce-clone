export const formmaterCurrency = (
  amount: number,
  locate: string,
  currency: string = "USD"
): string => {
  return new Intl.NumberFormat(locate, {
    style: "currency",
    currency: currency,
  }).format(amount);
};
