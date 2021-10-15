// Core
import React, { FC } from 'react';

// Dialog
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

type PropTypes = {
    isOpen: boolean
    title: string,
    onCancel: () => void,
    onApprove: () => void,
}

export const PromptDialog: FC<PropTypes> = ({ isOpen, title, onCancel, onApprove }) => {
    return (
        <Dialog
            open = { isOpen }
            onClose = { onCancel }>
            <DialogTitle>{title}</DialogTitle>
            <DialogActions>
                <Button onClick = { onCancel }>Disagree</Button>
                <Button
                    autoFocus
                    onClick = { onApprove }>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    );
};

