import { Checkbox } from "@/components/ui/checkbox";
import { QuizStepProps } from "./types";

const objectives = [
  "More energy",
  "Better sleep",
  "Improve concentration",
  "Strengthen immunity",
  "Reduce stress",
  "Support digestion",
  "Improve skin health",
  "Weight management",
];

interface ObjectivesStepProps {
  responses: { objectives?: string[] };
  updateResponse: (key: string, value: string[]) => void;
}

const ObjectivesStep = ({ responses, updateResponse }: ObjectivesStepProps) => {
  const toggleObjective = (objective: string) => {
    const currentObjectives = [...(responses.objectives || [])];
    if (currentObjectives.includes(objective)) {
      updateResponse("objectives", currentObjectives.filter((obj) => obj !== objective));
    } else {
      updateResponse("objectives", [...currentObjectives, objective]);
    }
  };

  return (
    <div className="space-y-3">
      <p className="font-medium mb-2">Select your goals (multiple choices allowed)</p>
      <div className="grid md:grid-cols-2 gap-3">
        {objectives.map((objective) => (
          <div
            key={objective}
            className={`border rounded-lg p-4 cursor-pointer transition-all ${
              responses.objectives?.includes(objective)
                ? "border-primary bg-primary/5"
                : "hover:border-primary/50"
            }`}
            onClick={() => toggleObjective(objective)}
          >
            <div className="flex items-center space-x-3">
              <Checkbox
                checked={responses.objectives?.includes(objective)}
                onCheckedChange={() => toggleObjective(objective)}
                id={`objective-${objective}`}
              />
              <label htmlFor={`objective-${objective}`} className="cursor-pointer flex-grow">
                {objective}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ObjectivesStep;