"use server";

import { envConfig } from "@/config/envConfig";
import { delay } from "@/utils/delay";

export const getRecentPosts = async () => {
  const res = await fetch(
    `${envConfig.baseApi}/items?sortBy=-createdAt&limit=9`,
  );

  await delay(5000);

  return res.json();
};
