import {
  FetchCreateContextFnOptions,
  fetchRequestHandler,
} from "@trpc/server/adapters/fetch";
import { appRouter } from "../trpc-router";
import { NextResponse } from "next/server";

const handler = (request: Request,response:Response) => {
  console.log(`incoming request ${request.url}`);
  if (request.method === 'OPTIONS') { 
    return new NextResponse("Cors Verified", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Credentials": "true",
      },
      status:200
    })
  }
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext: function (
      opts: FetchCreateContextFnOptions,
    ): object | Promise<object> {
      return {};
    },
  });
};

export { handler as GET, handler as POST };
