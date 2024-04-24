import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link';

const NavBar = () => {
    // Use state para forçar uma atualização após a montagem do componente


    return (
        <Box sx={{ fontSize: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', minWidth: '25vw'}}
             className="flex flex-row justify-between underline underline-offset-2"
        >
            <Link href={'/'}>SOBRE MIM</Link>
            <Link href={'/'}>PROJETOS</Link>
            <Link href={'/'}>UFPR</Link>
            <Link href={'/'}>CONTATO</Link>
        </Box>
    );
}

export default NavBar;