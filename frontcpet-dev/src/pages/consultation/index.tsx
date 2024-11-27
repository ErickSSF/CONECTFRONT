import Container from "../../components/common/container"
import Header from "../../components/common/header"
import PageTitle from "../../components/common/page-title"
import ConsultationComponent from "../../components/pages/consultation"

function Consultation() {

  return (
    <>
      <Header />
      <Container className="flex-col gap-6 pt-14">
        <PageTitle
          title="Profissional"
          subtitle="Esta é a listagem das consultas de hoje "
        />
        <ConsultationComponent />
      </Container>
    </>
  )
}

export default Consultation
