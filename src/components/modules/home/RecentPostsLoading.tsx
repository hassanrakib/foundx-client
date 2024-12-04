import Container from "@/components/UI/Container";

const RecentPostsLoading = () => {
  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recently Found Items</h2>
        <p className="text-center">
          A list of items that have been recently found and reported.
        </p>
      </div>
      <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-4">
        <h1>Loading...</h1>
      </div>
    </Container>
  );
};

export default RecentPostsLoading;
