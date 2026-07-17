"use client";

import Payment from "../Card/Payment";

interface Props {
  onSuccess?: (data: { firstName: string; lastName: string; cardNumber: string; exp: string; cvc: string; method: string }) => void;
}

export default function FormBuy({ onSuccess }: Props) {
  return <Payment onSuccess={onSuccess} />;
}
