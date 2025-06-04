import Link from 'next/link'

const SecondPage = () => (
    <div>
        <p>Goodbye World</p>
        <Link href="/">
        <a>Retornar ao Index</a>
        </Link>
        <br />
        <Link href="/nome">
        <a>Ir para nome</a>
        </Link>
        
    </div>
)

export default SecondPage