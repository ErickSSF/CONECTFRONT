import Container from "../../components/common/container"
import Header from "../../components/common/header"
import PageTitle from "../../components/common/page-title"
import PanelComponent from "../../components/pages/panel"

function Panel() {

  return (
    <>
      <Header />
      <Container className="flex-col gap-6 pt-14">
        <PageTitle
          title="Painel"
          subtitle="Visao Geral & Estatistica"
        />
        <PanelComponent />
      </Container>
    </>
  )
}

export default Panel
