import { useSettings } from "@/app/settingsContext";
import CardLoader from "@/app/components/cardLoader";

export const BrewsLoader = () => {
  const { itemsPerPage } = useSettings();
  return (
    <>
      {new Array(itemsPerPage).fill(0).map((_, i) => (
        <CardLoader key={i} />
      ))}
    </>
  );
};
