import Link from 'next/link'

const Index = () => (
    <div>
        <p>Hello World</p>
        <Link href="/secondPage">
        <a>Ir para segunda Página</a></Link>
    </div>
)

export default Index