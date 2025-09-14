import { ButtonGroup, Flex, IconButton, Pagination } from "@chakra-ui/react";
import { useSettings } from "@/app/settingsContext";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

// The API doesn't return the total number of items, but if the [official docs](https://github.com/alxiw/punkapi) are to be believed, there is exactly 415 beers.

export default function PaginationControls({
  page,
  setPage,
}: {
  page: number;
  setPage: (page: number) => void;
}) {
  const { itemsPerPage } = useSettings();
  return (
    <Flex marginTop={5} justifyContent="center">
      <Pagination.Root
        count={415}
        pageSize={itemsPerPage}
        page={page}
        onPageChange={(e) => setPage(e.page)}
      >
        <ButtonGroup variant="ghost">
          <Pagination.PrevTrigger asChild>
            <IconButton>
              <HiChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(page) => (
              <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                {page.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton>
              <HiChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </Flex>
  );
}
