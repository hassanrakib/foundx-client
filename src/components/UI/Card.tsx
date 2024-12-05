import { Button } from "@nextui-org/button";
import { CardFooter, CardHeader, Card as NextUiCard } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

import { IPost } from "@/types";

const Card = ({ post }: { post: IPost }) => {
  const { title, category, images, city, dateFound } = post;

  return (
    <NextUiCard isFooterBlurred className="h-[300px] w-full">
      <CardHeader className="absolute top-1 z-10 flex-col items-start">
        <p className="absolute -top-0 right-1 rounded-full bg-black px-2 text-tiny uppercase text-white/90">
          {category?.name}
        </p>
        <h4 className="mt-2 rounded bg-black/30 p-1 text-2xl font-medium text-white">
          {title}
        </h4>
      </CardHeader>

      <Image
        removeWrapper
        alt="Card example background"
        className="scale-120 z-0 h-full w-full -translate-y-6 object-cover"
        src={images[0]}
      />
      <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
        <div>
          <p className="text-tiny text-black">{city}</p>
          <p className="text-tiny text-black">{dateFound}</p>
        </div>

        <Button
          className="bg-black text-tiny text-white"
          radius="full"
          size="sm"
        >
          Details
        </Button>
      </CardFooter>
    </NextUiCard>
  );
};

export default Card;
