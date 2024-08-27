import React from "react";

interface ErrorTextProps {
  text: string;
}

const ErrorText = ({ text }: ErrorTextProps) => {
  return <p className={"text-red-500 text-sm"}>{text}</p>;
};

export default ErrorText;
