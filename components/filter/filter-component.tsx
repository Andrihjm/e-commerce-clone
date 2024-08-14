import FilterCheckbox from "./filter-checkbox";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { RangeSlider } from "../shared/range-slider";

const FilterComponent = () => {
  return (
    <div className="pr-2">
      <h1 className="mb-5 text-xl font-bold ">Filtering</h1>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <FilterCheckbox text="Ini pedas su" value="1" />
          <FilterCheckbox text="ini nggak pedas" value="2" />
        </div>

        <Separator />

        <div>
          <h2 className="text-lg">Prices From and To</h2>

          <div className="flex gap-3 text-primary mb-8">
            <Input
              type="number"
              placeholder="0"
              min={0}
              max={1000}
              defaultValue={0}
            />
            <Input type="number" placeholder="1000" min={100} max={1000} />
          </div>

          <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
        </div>

        <Separator />

        <div className="flex flex-col gap-2">
          <input type="text" />

          <div className="flex flex-col gap-4">
            <FilterCheckbox text="Ini pedas su" value="1" />
            <FilterCheckbox text="ini nggak pedas" value="2" />
            <FilterCheckbox text="Ini pedas su" value="1" />
            <FilterCheckbox text="ini nggak pedas" value="2" />
            <FilterCheckbox text="Ini pedas su" value="1" />
            <FilterCheckbox text="ini nggak pedas" value="2" />
            <FilterCheckbox text="Ini pedas su" value="1" />
            <FilterCheckbox text="ini nggak pedas" value="2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
