import React, {useState} from 'react'

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dialogContent, setDialogContent] = useState();

    const handleOpen = (content, open = true) => {
        setDialogContent(content);
        setIsOpen(open);
    };

    return [isOpen, setIsOpen, dialogContent, handleOpen];
}

export default useModal;