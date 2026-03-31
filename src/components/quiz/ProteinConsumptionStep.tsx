import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { QuizStepProps } from "./types";

const frequencyOptions = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Several times per week" },
  { value: "monthly", label: "A few times per month" },
  { value: "rarely", label: "Rarely or never" },
];

const fruitVegOptions = [
  { value: "0-1", label: "0 to 1 serving" },
  { value: "2-3", label: "2 to 3 servings" },
  { value: "4-5", label: "4 to 5 servings" },
  { value: "6+", label: "6 or more servings" },
];

const ProteinConsumptionStep = ({ responses, updateResponse }: QuizStepProps) => {
  return (
    <div className="space-y-6">
      <div>
        <p className="font-medium mb-3">How often do you consume meat?</p>
        <RadioGroup
          value={responses.meatConsumption}
          onValueChange={(value) => updateResponse("meatConsumption", value)}
          className="space-y-3"
        >
          {frequencyOptions.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <RadioGroupItem value={option.value} id={`meat-${option.value}`} />
              <Label htmlFor={`meat-${option.value}`}>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <Separator />

      <div>
        <p className="font-medium mb-3">How often do you consume fish or seafood?</p>
        <RadioGroup
          value={responses.fishConsumption}
          onValueChange={(value) => updateResponse("fishConsumption", value)}
          className="space-y-3"
        >
          {frequencyOptions.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <RadioGroupItem value={option.value} id={`fish-${option.value}`} />
              <Label htmlFor={`fish-${option.value}`}>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <Separator />

      <div>
        <p className="font-medium mb-3">How many servings of fruits and vegetables do you eat per day?</p>
        <RadioGroup
          value={responses.fruitVegConsumption}
          onValueChange={(value) => updateResponse("fruitVegConsumption", value)}
          className="space-y-3"
        >
          {fruitVegOptions.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <RadioGroupItem value={option.value} id={`fruitveg-${option.value}`} />
              <Label htmlFor={`fruitveg-${option.value}`}>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default ProteinConsumptionStep;