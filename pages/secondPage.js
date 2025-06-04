import Link from 'next/link'

const SecondPage = ({query}) => (
    <div>
        <h1>{query.title}</h1>
        <p>Qualquer coisa fixa na página</p>
    </div>
)

SecondPage.getInitialProps = ({query}) => ({query}) 

export default SecondPage