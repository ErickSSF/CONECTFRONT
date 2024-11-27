import Container from "../../../components/common/container"
import PageTitle from "../../../components/common/page-title"
import LoginComponent from "../../../components/pages/auth/login"

function Login() {

  return (
    <>
      <Container className="flex-col gap-6 pt-14">
        <div className="flex flex-col gap-6 justify-center items-center w-full">
          <PageTitle
            title="Login"
            subtitle="Gerenciamento de cadastro e dados de animais"
          />
          <LoginComponent />
        </div>
      </Container>
    </>
  )
}

export default Login
