import Link from 'next/link'

const Nome = () => (
    <div>
        <p>Felipe Julien</p>
        <Link href="/secondPage">
        <a>Ir para secondPage</a>
        </Link>
        <br />
        <Link href="/">
        <a>Ir para Index</a>
        </Link>
        
    </div>
)

export default Nome