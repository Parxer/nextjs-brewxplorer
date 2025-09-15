import ContentWrapper from "@/app/components/contentWrapper";
import { notFound } from "next/navigation";
import BeerDetailPage from "@/app/brews/[id]/beerDetail";

export default async function BeerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let parsedId: number;

  try {
    parsedId = Number.parseInt(id);
    if (parsedId < 1 || parsedId > 415) notFound();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    notFound();
  }

  return (
    <ContentWrapper as="main" marginY={10}>
      <BeerDetailPage id={parsedId} />
    </ContentWrapper>
  );
}
