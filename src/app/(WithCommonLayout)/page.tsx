import { Suspense } from "react";

import Landing from "@/components/modules/home/Landing";
import RecentPosts from "@/components/modules/home/RecentPosts";
import RecentPostsLoading from "@/components/modules/home/RecentPostsLoading";
import ErrorBoundary from "@/components/ErrrorBoundary";

export default function Home() {
  return (
    <>
      <Landing />
      <ErrorBoundary fallback={<p>Error occured!</p>}>
        <Suspense fallback={<RecentPostsLoading />}>
          <RecentPosts />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
