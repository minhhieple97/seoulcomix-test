import { dehydrate } from "@tanstack/react-query";
import Hydrate from "@/utils/hydrate-client";
import { createSSRHelper } from "./api/trpc/trpc-router";
import { ListRestaurants } from "@/components/restaurant";
import { SearchInput } from "@/components/restaurant/SearchInput";
import { MenuBar } from "@/components/restaurant/MenuBar";

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
        <ListRestaurants></ListRestaurants>
        <MenuBar></MenuBar>
      </main>
    </Hydrate>
  );
}
