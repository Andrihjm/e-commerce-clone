interface CartItemDetailPriceProps {
  value: number;
}

const CartItemDetailPrice = ({ value }: CartItemDetailPriceProps) => {
  return <h2 className="font-bold">${value}</h2>;
};

export default CartItemDetailPrice;
