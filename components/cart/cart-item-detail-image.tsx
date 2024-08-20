import Image from "next/image";

interface CartItemDetailImageProps {
  src: string;
}

const CartItemDetailImage = ({ src }: CartItemDetailImageProps) => {
  return (
    <Image
      src={src}
      alt="photo"
      width={60}
      height={60}
      className="w-[60px] h-[60px] object-cover"
    />
  );
};

export default CartItemDetailImage;
