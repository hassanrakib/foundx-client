"use client";
import { FieldValues, SubmitHandler } from "react-hook-form";
import FXForm from "../form/FXForm";
import FXModal from "./FXModal";
import FXInput from "../form/FXInput";
import FXTextArea from "../form/FXTextArea";
import { Button } from "@nextui-org/button";
import { useAddClaimRequest } from "@/hooks/claimRequest.hook";
import Loading from "../UI/Loading";

type ClaimRequestModalProps = {
  id: string;
  questions: string[];
};

const ClaimRequestModal = ({ id, questions }: ClaimRequestModalProps) => {
  const { mutate: handleAddClaimRequest, isPending } = useAddClaimRequest();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const claimRequest = {
      item: id,
      description: data.description,
      answers: Object.keys(data)
        .filter((key) => key.startsWith("answer"))
        .map((key) => data[key]),
    };

    handleAddClaimRequest(claimRequest);
  };

  return (
    <FXModal buttonText="Claim Request" title="Claim Request">
      {isPending && <Loading />}
      <FXForm onSubmit={onSubmit}>
        {questions.map((question, index) => (
          <div key={index} className="mb-4">
            <FXInput name={`answer-${index + 1}`} label={question} />
          </div>
        ))}
        <FXTextArea name="description" label="Description" />
        <Button className="mt-4" type="submit">
          Send
        </Button>
      </FXForm>
    </FXModal>
  );
};

export default ClaimRequestModal;
