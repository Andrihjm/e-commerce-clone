"use client";

import dynamic from "next/dynamic";
import "react-dadata/dist/react-dadata.css";

const DynamicAddressSuggestions = dynamic(
  () => import("react-dadata").then((mod) => mod.AddressSuggestions),
  { ssr: false }
);

interface AddressInputProps {
  onChange: (value?: string) => void;
}

interface CustomAddressSuggestionsProps {
  token: string;
  onChange: (data?: string) => void;
  lang?: string;
}

const CustomAddressSuggestions = ({
  token,
  onChange,
  lang,
}: CustomAddressSuggestionsProps) => {
  return (
    <DynamicAddressSuggestions
      token={token}
      onChange={(data) => onChange(data?.value)}
      // Properti lang diabaikan jika tidak didukung oleh komponen asli
    />
  );
};

export const AddressInput = ({ onChange }: AddressInputProps) => {
  const token = "af38e8c86bc99c7d13230f5cb4c35c4e48dda6d0";

  return (
    <CustomAddressSuggestions
      token={token}
      onChange={onChange}
      lang="id" // Menyediakan opsi lang meskipun tidak digunakan
    />
  );
};
