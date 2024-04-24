import { List, colors } from '@mui/material';
import Box from '@mui/material/Box';

const Formacao = () => {
    // Use state para forçar uma atualização após a montagem do componente


    return (
        <Box className="m-5 p-10">
            <h1>Formação Acadêmica:</h1>
            <List>
                <Box sx={{borderColor: "#FADF75", borderWidth: "1px", padding: "5px"}} className="border-dashed">
                    <h2>Bacharelado em Ciência da Computação</h2>
                    <h3>Universidade Federal do Paraná (Ufpr)</h3>
                    <h1 class="subtitle_gray">Set 2021 - Atualmente</h1>
                </Box>
                <br />
                <Box sx={{borderColor: "#FADF75", borderWidth: "1px", padding: "5px"}} className="border-dashed">
                    <h2>Ensino Médio Técnico em Informática</h2>
                    <h3>Pontifício Universidade Católica (TecPuc)</h3>
                    <h1 class="subtitle_gray">2016 - 2020</h1>
                </Box>
            </List>
        </Box>
    );
}

export default Formacao;