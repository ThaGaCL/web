import { colors } from '@mui/material';
import Box from '@mui/material/Box';

const Projetos = () => {
    // Use state para forçar uma atualização após a montagem do componente


    return (
        <Box id="projetos" className="m-5">
            <h1>Projetos</h1>
            <p>Aqui estão alguns projetos que desenvolvi durante minha formação:</p>
        </Box>
    );
}

export default Projetos;