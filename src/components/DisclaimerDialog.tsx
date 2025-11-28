import { useState, useEffect } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const DisclaimerDialog = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // Check if user has already seen the disclaimer
        const hasSeenDisclaimer = sessionStorage.getItem("hasSeenDisclaimer");
        
        if (!hasSeenDisclaimer) {
            setOpen(true);
        }
    }, []);

    const handleClose = () => {
        sessionStorage.setItem("hasSeenDisclaimer", "true");
        setOpen(false);
    };

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Demo Website Notice</AlertDialogTitle>
                    <AlertDialogDescription>
                        This is a demonstration website created for showcase purposes. 
                        The event information, dates, and registration details presented 
                        here are fictional and for illustrative purposes only.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction onClick={handleClose}>
                        I Understand
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DisclaimerDialog;
