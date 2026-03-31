import { Checkbox } from "@/components/ui/checkbox";
import { QuizStepProps } from "./types";

const symptoms = [
  "Fatigue",
  "Sleep disturbances",
  "Stress / Anxiety",
  "Digestive issues",
  "Joint pain",
  "Skin problems",
  "Headaches",
  "Mood swings",
  "Food cravings",
  "Lack of concentration",
  "Cold sensitivity",
  "Brittle hair / nails",
];

const SymptomsStep = ({ responses, updateResponse }: QuizStepProps) => {
  const toggleSymptom = (symptom: string) => {
    const currentSymptoms = [...(responses.symptoms || [])];
    if (currentSymptoms.includes(symptom)) {
      updateResponse("symptoms", currentSymptoms.filter((sym) => sym !== symptom));
    } else {
      updateResponse("symptoms", [...currentSymptoms, symptom]);
    }
  };

  return (
    <div>
      <p className="font-medium mb-4">Select the symptoms you frequently experience:</p>
      <div className="grid md:grid-cols-2 gap-3">
        {symptoms.map((symptom) => (
          <div
            key={symptom}
            className={`border rounded-lg p-3 cursor-pointer transition-all ${
              responses.symptoms?.includes(symptom)
                ? "border-primary bg-primary/5"
                : "hover:border-primary/50"
            }`}
            onClick={() => toggleSymptom(symptom)}
          >
            <div className="flex items-center space-x-3">
              <Checkbox
                checked={responses.symptoms?.includes(symptom)}
                onCheckedChange={() => toggleSymptom(symptom)}
                id={`symptom-${symptom}`}
              />
              <label htmlFor={`symptom-${symptom}`} className="cursor-pointer flex-grow">
                {symptom}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SymptomsStep;