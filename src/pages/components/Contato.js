import { colors } from '@mui/material';
import Box from '@mui/material/Box';

const Contato = () => {
    // Use state para forçar uma atualização após a montagem do componente


    return (
        <Box id="contato" className="m-5">
            <h1>Contato</h1>
            <p sx={{color:'#FADF75'}}>É só falar <span className='underline underline-offset-1'> "OW THALES!!!" </span> bem alto.</p>
        </Box>
    );
}

export default Contato;