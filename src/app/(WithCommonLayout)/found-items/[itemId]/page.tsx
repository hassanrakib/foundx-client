import Container from "@/components/UI/Container";
import Post from "@/components/UI/Post";
import { getPost } from "@/services/Post";

type ItemDetailsPageProps = {
  params: {
    itemId: string;
  };
};

const ItemDetailsPage = async ({
  params: { itemId },
}: ItemDetailsPageProps) => {
  const { data: post } = await getPost(itemId);

  return (
    <Container>
      <div className="mx-auto my-3 max-w-[720px]">
        <Post key={post?._id} post={post} />
      </div>
    </Container>
  );
};

export default ItemDetailsPage;
