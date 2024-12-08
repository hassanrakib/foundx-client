import { Spinner } from "@nextui-org/spinner";

const Loading = () => {
  return (
    <div className="bg-black-500/20 h-screen fixed inset-0 z-[999] backdrop-blur-md flex justify-center items-center">
      <Spinner size="lg" />
    </div>
  );
};

export default Loading;
