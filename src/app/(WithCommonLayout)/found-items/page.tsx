import Container from "@/components/UI/Container";
import Post from "@/components/UI/Post";
import axiosInstance from "@/lib/AxiosInstance";
import { IPost } from "@/types";

const FoundItems = async ({ searchParams }: { searchParams: any }) => {
  const params = new URLSearchParams(searchParams);
  const { data } = await axiosInstance.get("/items", {
    params: {
      searchTerm: params.get("query"),
    },
  });

  return (
    <Container>
      <div className="mx-auto my-3 max-w-[720px]">
        {data?.data?.map((post: IPost) => <Post key={post._id} post={post} />)}
      </div>
    </Container>
  );
};

export default FoundItems;
