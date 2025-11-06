import React from "react";
import {useState} from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {Button} from "@/components/ui/button";

interface DeleteDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onDelete: () => void;
    title?: string;
    description?: string;
}

export default function DeleteDialog({
    open,
    onOpenChange,
    onDelete,
    title = "삭제",
    description = "정말 삭제하시겠습니까?"
}: DeleteDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                    <p>{description}</p>
                    <div className="flex gap-3">
                        <Button variant="outline" className="flex-1" onClick={() => onOpenChange(false)}>
                            취소
                        </Button>
                        <Button variant="destructive" className="flex-1" onClick={onDelete}>
                            삭제
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}