import { cn } from "@/lib/utils";

interface WhiteBlockProps {
  title?: string;
  endAdornment?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  children?: React.ReactNode;
}

const WhiteBlock = ({
  title,
  endAdornment,
  className,
  contentClassName,
  children,
}: WhiteBlockProps) => {
  return (
    <>
      <div className={cn("rounded-2xl bg-white/95", className)}>
        {title && (
          <div className="flex items-center justify-between pt-4 px-7 border-b border-gray-100">
            <h3 className="font-bold">{title}</h3>
            {endAdornment}
          </div>
        )}

        <div className="background-primary h-[1px] my-2" />

        <div className={cn("px-5 py-4", contentClassName)}>{children}</div>
      </div>
    </>
  );
};

export default WhiteBlock;
