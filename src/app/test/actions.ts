"use server";

import { DetaSource } from "@/lib/sources/deta";

const publishCounter = async () => {
  console.log("server actions called");

  DetaSource.insert({
    baseName: "coba",
    payload: {
      item: { value: new Date().toISOString() },
    },
  });
};

export { publishCounter };
