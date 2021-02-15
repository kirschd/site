import Footer from '../footer'
import Header from '../header'
import { Column } from '../utils'

const Wide = ({ children }) => {
  return <Column width="50rem">{children}</Column>
}

const Marketing = ({ nameplateHidden, ...props }) => {
  return (
    <>
      <Header nameplateHidden={nameplateHidden} />
      <main style={{ padding: '1.5rem 0 5rem 0' }}>{props.children}</main>
      <Footer />
    </>
  )
}

export default Marketing

export { Wide }
