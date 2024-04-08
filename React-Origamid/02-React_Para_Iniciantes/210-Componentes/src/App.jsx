import React, {Fragment} from "react"
import Header from "./Header"
import Form from "./form/Form"
import Footer from "./Footer"

// Um componente *sempre* deve retornar algo, mesmo que seja `null`
const teste = () => {
  const active = true
  if(active){
    return <p>Teste</p>
  }else{
    return null
  }
}

const App = () => {
  return (
    /* <React.Fragment></React.Fragment>*/
    /* <></> */
    <Fragment>
      <Header />
      <Form />
      <Footer />
    </Fragment>
  )
}

export default App
