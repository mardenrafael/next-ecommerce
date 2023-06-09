import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";

export interface SwitchProps {
  initialValue?: boolean;
  onSwitch?: () => void;
}

export default function Switch({
  initialValue,
  onSwitch,
}: SwitchProps): JSX.Element {
  const [enabled, setEnabled] = useState<boolean | undefined>(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setEnabled(initialValue);
  }, []);

  return (
    <div
      className={`flex items-center transition-all ${
        theme == ThemeOptions.light ? "text-gray-900" : "text-white"
      }`}
    >
      <div
        className={`${
          enabled ? "bg-primary-600" : "bg-gray-200"
        } relative inline-flex h-6 w-11 items-center rounded-full hover:cursor-pointer mx-2`}
        onClick={() => {
          setEnabled(!enabled);
          onSwitch != undefined && onSwitch();
        }}
      >
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        ></span>
      </div>
    </div>
  );
}
