import Link from 'next/link'

const Index = () => (
    <div>
        <p>Hello World</p>
        <Link href="/secondPage">
        <a>Ir para segunda Página</a>
        </Link>
        <br />
        <Link href="/nome">
        <a>Ir para segunda Nome</a>
        </Link>
    </div>
)

export default Index