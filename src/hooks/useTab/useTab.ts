import { useState } from "react";

export function useTab(defaultValue: string = "all") {
    const [value, setValue] = useState<string>(defaultValue);

    const onValueChange = (newValue: string) => {
        setValue(newValue);
    };

    return { value, onValueChange };
}