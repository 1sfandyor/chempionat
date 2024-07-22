import { useState } from "react";

export const useTab = () => {
  const [value, setValue] = useState<string>('profile'); // Default value

const onValueChange = (newValue: string) => {
  setValue(newValue); // Update tab value
};

  return { value, onValueChange }; // Return current value and updater function
};
