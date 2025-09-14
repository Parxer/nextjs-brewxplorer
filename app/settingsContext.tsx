import { Context, createContext, FC, ReactNode, useContext } from "react";

interface Settings {
  itemsPerPage: number;
}

const defaultSettings: Settings = {
  itemsPerPage: 18,
};

export const SettingsContext: Context<Settings> =
  createContext(defaultSettings);

export const useSettings = () => {
  return useContext(SettingsContext);
};

export const SettingsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const settings: Settings = { ...defaultSettings };
  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
};
