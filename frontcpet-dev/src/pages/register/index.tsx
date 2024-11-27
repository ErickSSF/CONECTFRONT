import Container from "../../components/common/container"
import Header from "../../components/common/header"
import PageTitle from "../../components/common/page-title"
import RegisterComponent from "../../components/pages/register"

function Register() {

  return (
    <>
      <Header />
      <Container className="flex-col gap-6 pt-14">
        <PageTitle
          title="Cadastro"
          subtitle="Gerenciamento de cadastro e dados de animais"
        />
        <RegisterComponent />
      </Container>
    </>
  )
}

export default Register
