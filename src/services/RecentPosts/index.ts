"use server";

import { envConfig } from "@/config/envConfig";
import { delay } from "@/utils/delay";

export const getRecentPosts = async () => {
  const fetchOption = {
    next: {
      tags: ["posts"],
    },
  };
  const res = await fetch(
    `${envConfig.baseApi}/items?sortBy=-createdAt&limit=9`,
    fetchOption,
  );

  await delay(5000);

  return res.json();
};
