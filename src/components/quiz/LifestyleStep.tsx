import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { QuizStepProps } from "./types";

const exerciseOptions = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "2–3 times per week" },
  { value: "monthly", label: "A few times per month" },
  { value: "rarely", label: "Rarely or never" },
];

const sleepOptions = [
  { value: "excellent", label: "Excellent — I wake up feeling fully rested" },
  { value: "good", label: "Good — occasional difficulties" },
  { value: "average", label: "Average — frequent difficulties (falling asleep, waking up)" },
  { value: "poor", label: "Poor — chronic sleep problems" },
];

const stressOptions = [
  { value: "low", label: "Low — I generally feel relaxed" },
  { value: "moderate", label: "Moderate — occasional stress" },
  { value: "high", label: "High — frequent stress" },
  { value: "severe", label: "Severe — chronic stress" },
];

const LifestyleStep = ({ responses, updateResponse }: QuizStepProps) => {
  return (
    <div className="space-y-6">
      <div>
        <p className="font-medium mb-3">How often do you engage in physical activity?</p>
        <RadioGroup
          value={responses.exerciseFrequency}
          onValueChange={(value) => updateResponse("exerciseFrequency", value)}
          className="space-y-3"
        >
          {exerciseOptions.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <RadioGroupItem value={option.value} id={`exercise-${option.value}`} />
              <Label htmlFor={`exercise-${option.value}`}>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <Separator />

      <div>
        <p className="font-medium mb-3">How would you rate the quality of your sleep?</p>
        <RadioGroup
          value={responses.sleepQuality}
          onValueChange={(value) => updateResponse("sleepQuality", value)}
          className="space-y-3"
        >
          {sleepOptions.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <RadioGroupItem value={option.value} id={`sleep-${option.value}`} />
              <Label htmlFor={`sleep-${option.value}`}>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <Separator />

      <div>
        <p className="font-medium mb-3">How would you rate your stress level?</p>
        <RadioGroup
          value={responses.stressLevel}
          onValueChange={(value) => updateResponse("stressLevel", value)}
          className="space-y-3"
        >
          {stressOptions.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <RadioGroupItem value={option.value} id={`stress-${option.value}`} />
              <Label htmlFor={`stress-${option.value}`}>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default LifestyleStep;