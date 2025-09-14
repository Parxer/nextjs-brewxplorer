import { Flex, NativeSelect, Text } from "@chakra-ui/react";
import { useSettings } from "@/app/settingsContext";
import { toaster } from "@/app/components/toaster";

const OPTIONS = [12, 24, 36, 48, 60];

export default function ListControls() {
  const { itemsPerPage, setItemsPerPage } = useSettings();

  const setNewValue = (newValue: string) => {
    try {
      const parsedValue = Number.parseInt(newValue, 10);
      setItemsPerPage(parsedValue);
    } catch (_) {
      toaster.error({
        title: "Invalid selection",
        description: `${newValue} is not a valid option for items per page`,
      });
    }
  };

  return (
    <Flex
      alignItems="center"
      justifySelf="flex-end"
      paddingX={5}
      paddingY={2}
      marginBottom={5}
      backgroundColor="#F5F5F5"
    >
      <Text>Items:</Text>
      <NativeSelect.Root
        width={50}
        size="xs"
        marginLeft={4}
        colorPalette="yellow"
      >
        <NativeSelect.Field
          value={itemsPerPage}
          onChange={(e) => setNewValue(e.currentTarget.value)}
        >
          {OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </NativeSelect.Field>
      </NativeSelect.Root>
    </Flex>
  );
}
