// import { api } from "@/utils/api";
import { LoadingButton } from "@mui/lab";
import React, { useContext, useEffect, useState } from "react";
// import useNotification from "./Notification";
import ConfirmationDialog from "../dialogs/ConfirmationDialog";
import Check from "@mui/icons-material/Check";
// import { useAppStore } from "@/utils/store";
import type { UpdateWorkerEventType, WorkerPathType } from "@/types/worker";
// import { useAppStore } from "@/utils/store";
import { WorkerContext } from "@/context/WorkerContext";
import { useAppStore } from "@/utils/store";

const UpdateMultiple = ({
  path,
  ids,
  handleRefresh,
}: {
  path: WorkerPathType;
  ids: string[];
  handleRefresh?: () => void;
}) => {
  // const { data } = useSession();
  const [open, setOpen] = useState<boolean>(false);
  const { updateWorker } = useContext(WorkerContext);
  const { toast, setToast, isUpdating, setIsUpdating } = useAppStore();

  const handleDelete = () => {
    setOpen(false);
    setIsUpdating(true);
    updateWorker?.current?.postMessage({
      path,
      data: ids,
    } as UpdateWorkerEventType);
  };

  useEffect(() => {
    if (toast.message === "done" && path === toast.path) {
      setIsUpdating(false);
      setToast({ message: "" });
      typeof handleRefresh === "function" && handleRefresh();
    }
  }, [toast, handleRefresh, setToast, setIsUpdating, path]);

  if (ids.length === 0) return null;

  return (
    <>
      <LoadingButton
        onClick={() => setOpen(true)}
        loading={isUpdating}
        startIcon={<Check />}
        color="success"
      >
        Mark as Completed
      </LoadingButton>
      <ConfirmationDialog
        open={open}
        title="Complete Task Confirmation"
        message="Are you sure to mark selected task to completed?"
        onClose={() => setOpen(false)}
        onSubmit={handleDelete}
        confirmColor="success"
      />
    </>
  );
};

export default UpdateMultiple;
