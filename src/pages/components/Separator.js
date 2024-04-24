import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

const Separator = () => {
    // Use state para forçar uma atualização após a montagem do componente


    return (
        <Box sx={{fontSize:'10px', minWidth: '60vw', alignItems: 'center', textAlign: 'center'}}>
            ----------------------------------------------------------------------------------------------------------------------------------------------------------------
        </Box>
    );
}

export default Separator;