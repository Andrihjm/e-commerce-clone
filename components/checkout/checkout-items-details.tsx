import React from "react";

interface CheckoutItemsDetailsProps {
  title: React.ReactNode;
  value: number;
}

const CheckoutItemsDetails = ({ title, value }: CheckoutItemsDetailsProps) => {
  return (
    <div>
      <div className="flex my-4 text-base">
        <span className="flex flex-1 text-neutral-500">
          {title}
          <div className="flex-1 border-dashed-primary relative -top-1 mx-2" />
        </span>

        <span className="font-bold">${value}</span>
      </div>
    </div>
  );
};

export default CheckoutItemsDetails;
