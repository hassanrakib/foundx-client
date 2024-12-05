// import { Suspense } from "react";

import Landing from "@/components/modules/home/Landing";
// import RecentPosts from "@/components/modules/home/RecentPosts";
// import RecentPostsLoading from "@/components/modules/home/RecentPostsLoading";
// import ErrorBoundary from "@/components/ErrrorBoundary";

export default function Home() {
  return (
    <>
      <Landing />
      {/* this is one way to show error / loading for a part of the page */}
      {/* <ErrorBoundary fallback={<p>Error occured!</p>}>
        <Suspense fallback={<RecentPostsLoading />}>
          <RecentPosts />
        </Suspense>
      </ErrorBoundary> */}

      {/* the modern way is done using named slot @recentPosts which is rendered in layout.tsx */}
    </>
  );
}
