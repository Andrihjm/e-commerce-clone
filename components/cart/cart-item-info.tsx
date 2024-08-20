interface CartItemInfoProps {
  name: string;
  details: string;
}

const CartItemInfo = ({ name, details }: CartItemInfoProps) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="flex-1 text-lg font-bold leading-6">{name}</h2>
      </div>

      {details && <p className="w-[90%] text-xs text-gray-400">{details}</p>}
    </div>
  );
};

export default CartItemInfo;
