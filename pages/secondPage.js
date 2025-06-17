import Link from 'next/link'

const SecondPage = ({ query }) => {
    let conteudo = "Qualquer coisa fixa na página";
    if (query.title === "Contatos") {
        conteudo = "Aqui estão os contatos!";
    } else if (query.title === "Cursos") {
        conteudo = "Veja nossos cursos!";
    } else if (query.title === "Monitoria") {
        conteudo = "Informações sobre monitoria.";
    }

    return (
        <div>
            <h1>{query.title}</h1>
            <p>{conteudo}</p>
            <Link href="/">
                <a>Retornar ao Index</a>
            </Link>
        </div>
    );
};

SecondPage.getInitialProps = ({ query }) => ({ query });

export default SecondPage;