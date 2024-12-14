import { addClaimRequest } from "@/services/ClaimRequest";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useAddClaimRequest = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["ADD_CLAIM_REQUEST"],
    mutationFn: async (claimRequest) => await addClaimRequest(claimRequest),
    onSuccess: () => {
      toast.success("Claim request sent!");
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });
};
