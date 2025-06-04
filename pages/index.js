import Link from 'next/link'

const ListLink = (props) => (
    <li>
        <Link href={`/secondPage?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default () => (
    <div>
        <h1>Home Page</h1>
        <ul>
            <ListLink title="Cursos" />
            <ListLink title="Contatos" />
            <ListLink title="Monitoria" />
        </ul>
    </div>
)