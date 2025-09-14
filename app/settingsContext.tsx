import {
  Context,
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from "react";

interface Settings {
  itemsPerPage: number;
  setItemsPerPage: (page: number) => void;
}

const defaultSettings: Settings = {
  itemsPerPage: 18,
  setItemsPerPage: () => null,
};

export const SettingsContext: Context<Settings> =
  createContext(defaultSettings);

export const useSettings = () => {
  return useContext(SettingsContext);
};

export const SettingsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [itemsPerPage, setItemsPerPage] = useState(
    defaultSettings.itemsPerPage,
  );
  const settings: Settings = { itemsPerPage, setItemsPerPage };
  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
};
