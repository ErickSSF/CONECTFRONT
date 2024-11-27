import Container from "../../../components/common/container"
import PageTitle from "../../../components/common/page-title"
import AuthRegisterComponent from "../../../components/pages/auth/register"

function AuthRegister() {

  return (
    <>
      <Container className="flex-col gap-6 pt-14">
        <div className="flex flex-col gap-6 justify-center items-center w-full">
          <PageTitle
            title="Cadastro"
            subtitle="Gerenciamento de cadastro e dados de animais"
          />
          <AuthRegisterComponent />
        </div>
      </Container>
    </>
  )
}

export default AuthRegister
