import { colors } from '@mui/material';
import Box from '@mui/material/Box';

const SobreMim = () => {
    // Use state para forçar uma atualização após a montagem do componente


    return (
        <Box className="m-5">
            <h1>Sobre Mim: </h1>
            <p sx={{color:'#FADF75'}}>Olá! Me chamo Thales Gabriel, tenho 21 anos e 
            faço bacharelado em Ciência da Computação na Universidade Federal do Paraná (UFPR), </p>
            <p>atualmente sou membro do Centro de Computação Ciêntifica e Software Livre (C3SL) </p>
        </Box>
    );
}

export default SobreMim;