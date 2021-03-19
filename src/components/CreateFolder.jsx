import React, { useState, useContext } from 'react';
import { Dialog } from 'primereact/dialog';

export const CreateFolderContext = React.createContext({});

function CreateFolder() {
    const { visible } = useContext(CreateFolderContext);
    return (
        <Dialog
            header='Create Folder'

            position='top-left'
            modal={false}
        >
            Create a folder
        </Dialog>
    );
}

export default CreateFolder;
