import { dehydrate } from "@tanstack/react-query";
import Hydrate from "@/utils/hydrate-client";
import { createSSRHelper } from "./api/trpc/trpc-router";
import { ListRestaurants } from "@/components/restaurant";

export default async function Home() {
  const helpers = createSSRHelper();
  await helpers.getRestaurants.prefetch();
  return (
    <Hydrate state={dehydrate(helpers.queryClient)}>
      <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
        <ListRestaurants></ListRestaurants>
      </main>
    </Hydrate>
  );
}
