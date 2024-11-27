import Container from "../../components/common/container"
import Header from "../../components/common/header"
import PageTitle from "../../components/common/page-title"
import ScheduleComponent from "../../components/pages/schedule"

function Schedule() {

  return (
    <>
      <Header />
      <Container className="flex-col gap-6 pt-14">
        <PageTitle
          title="Agenda"
          subtitle="Gestão de agendamentos"
        />
        <ScheduleComponent />
      </Container>
    </>
  )
}

export default Schedule
