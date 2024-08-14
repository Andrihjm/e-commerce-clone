import { ArrowUpDown } from "lucide-react";

const SortPopUp = () => {
  return (
    <div className="h-[52px] inline-flex items-center gap-1 px-5 rounded-2xl bg-gray-500/10 cursor-pointer">
      <ArrowUpDown size={16} />
      <p>Category:</p>
      <p className="text-primary">Luwak kebon</p>
    </div>
  );
};

export default SortPopUp;
