import { dehydrate } from "@tanstack/react-query";
import Hydrate from "@/utils/hydrate-client";
import { createSSRHelper } from "./api/trpc/trpc-router";
import { ListRestaurants } from "@/components/list-restaurants";
import { SearchInput } from "@/components/search-input/SearchInput";
import { MenuBar } from "@/components/ui/components/MenuBar";

export default async function Home() {
  const helpers = createSSRHelper();
  await helpers.getRestaurants.prefetch();
  return (
    <Hydrate state={dehydrate(helpers.queryClient)}>
      <main
        style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}
        className="items-center md:flex md:flex-col md:gap-6"
      >
        <SearchInput className="m-auto mb-6"></SearchInput>
        <ListRestaurants className="mb-12"></ListRestaurants>
        <MenuBar></MenuBar>
      </main>
    </Hydrate>
  );
}
