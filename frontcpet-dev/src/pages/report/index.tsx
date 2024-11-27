import Container from "../../components/common/container"
import Header from "../../components/common/header"
import PageTitle from "../../components/common/page-title"
import ReportComponent from "../../components/pages/report"

function Report() {

  return (
    <>
      <Header />
      <Container className="flex-col gap-6 pt-14">
        <PageTitle
          title="Relatórios"
          subtitle="Geração de relatórios gerenciais"
        />
        <ReportComponent />
      </Container>
    </>
  )
}

export default Report
