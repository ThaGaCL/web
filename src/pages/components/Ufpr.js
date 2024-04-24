import { colors } from '@mui/material';
import Box from '@mui/material/Box';

const Ufpr = () => {
    // Use state para forçar uma atualização após a montagem do componente


    return (
        <Box id="ufpr" className="m-5">
            <h1>Na Ufpr:</h1>
            <Box className="m-5">
                <h2>Pet Computação</h2>
                <h3 class="subtitle_gray">Departamento de Informática - UFPR</h3>
                <p>Entre o inicio de 2022 e o inicio de 2024 fui membro do Programa Educação Tutorial do Departamento de Informática, onde participei</p>
                <p>de projetos de extensão e pesquisa, além de eventos e cursos de capacitação.</p>
            </Box>
            <Box className="m-5">
                <h2>AKHub</h2>
                <h3 class="subtitle_gray">Exxon Mobile - UFPR</h3>
                <p>No inicio de 2024 fui membro do AKHub, um projeto da UFPR em conjunto com a Exxo Mobile onde foquei em criar uma </p>
                <p>estruturação inicial para o banco de dados e integrações entre frentes</p>
            </Box>
            <Box className="m-5">
                <h2>C3SL</h2>
                <h3 class="subtitle_gray">Departamento de Informática - UFPR</h3>
                <p>Desde março de 2024 sou membro do Centro de Computação Ciêntifica e Software Livre, atuo no Laboratório de Dados Educacionais</p>
                <p>ou LDE, onde lidamos com a análise de dados estatísticos para obtermos informações relevantes para entender a situação atual da</p>
                <p>educação no Brasil.</p>
            </Box>
        </Box>
    );
}

export default Ufpr;