import Link from 'next/link'

const SecondPage = () => (
    <div>
        <p>Goodbye World</p>
        <Link href="/">
        <p>Retornar ao Index</p>
        </Link>
        
    </div>
)

export default SecondPage