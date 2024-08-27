import React from "react";
import WhiteBlock from "../shared/white-block";
import { Textarea } from "../ui/textarea";
import { AddressInput } from "../shared/address-input";
import { Controller, useFormContext } from "react-hook-form";
import ErrorText from "../shared/error-text";

interface CheckotuFormAddressProps {
  className?: string;
}

const CheckotuFormAddress = ({ className }: CheckotuFormAddressProps) => {
  const { control } = useFormContext();

  return (
    <WhiteBlock title="3. Pesan" className={className}>
      <div className="flex flex-col gap-5">
        <Controller
          name="address"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <AddressInput onChange={field.onChange} />
              {fieldState.error?.message && (
                <ErrorText text={fieldState.error.message} />
              )}
            </>
          )}
        />

        <Textarea placeholder="Tulis pesan Anda di sini." />
      </div>
    </WhiteBlock>
  );
};

export default CheckotuFormAddress;
