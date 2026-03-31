import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { QuizStepProps } from "./types";

const dietaryOptions = [
  { value: "omnivore", label: "Omnivore (I eat everything)" },
  { value: "flexitarian", label: "Flexitarian (I limit meat consumption)" },
  { value: "pescatarian", label: "Pescatarian (I eat fish but not meat)" },
  { value: "vegetarian", label: "Vegetarian (no meat or fish)" },
  { value: "vegan", label: "Vegan (no animal products)" },
];

const DietaryHabitsStep = ({ responses = { dietaryHabits: '' }, updateResponse }: QuizStepProps) => {
  return (
    <div>
      <p className="font-medium mb-4">What type of diet do you follow?</p>
      <RadioGroup
        value={responses.dietaryHabits}
        onValueChange={(value) => updateResponse("dietaryHabits", value)}
        className="space-y-3"
      >
        {dietaryOptions.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupItem value={option.value} id={option.value} />
            <Label htmlFor={option.value}>{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default DietaryHabitsStep;