import * as React from "react";

interface PayOrderProps {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export const PayOrder: React.FC<Readonly<PayOrderProps>> = ({
  orderId,
  totalAmount,
  paymentUrl,
}) => (
  <div>
    <h1>Welcome, #{orderId}!</h1>

    <p>
      Bayar pesanan dalam jumlah $ {totalAmount}. Pergi{" "}
      <a href={paymentUrl}>di tautan ini </a>untuk membayar pesanan.
    </p>
  </div>
);
