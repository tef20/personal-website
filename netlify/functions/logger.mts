import type { Context, Config } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  console.log("hello");
  return new Response(`Page viewed: {Object.entries(context.params)}`);
};

// export const config: Config = {
//   path: "/*",
// };
