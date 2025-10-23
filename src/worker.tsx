import { route } from "rwsdk/router";
import { defineApp } from "rwsdk/worker";

import { setCommonHeaders } from "@/app/headers";
import { createBadge } from "@/badges";

export type AppContext = {};

export default defineApp([
  setCommonHeaders(),
  ({ ctx }) => {
    ctx;
  },

  route("/", () => {
    const text = "Unicorns are at the end of this road, I promise.";
    const svgBadge = createBadge({ 
      style: "optional", 
      text
    });

    return new Response(svgBadge, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=31536000",
      },
    });
  }),

  route("/:style/:text.svg", async ({ params }) => {
    const { style, text } = params;

    if (!style || !text) {
      return new Response("Missing style or text parameters", { status: 400 });
    }

    const decodedText = decodeURIComponent(text);
    const svgBadge = createBadge({ style, text: decodedText });

    return new Response(svgBadge, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=31536000",
      },
    });
  }),
]);