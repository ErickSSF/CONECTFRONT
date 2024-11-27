import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = dayjsLocalizer(dayjs)

function ScheduleComponent() {

  return (
    <div className="flex flex-col gap-8 pt-4 pb-10">
      <Calendar
        localizer={localizer}
        events={[
          {
            id: 1,
            title: 'Exame: Gato',
            start: new Date(2024, 10, 10),
            end: new Date(2024, 10, 10),
          },
          {
            id: 2,
            title: 'Exame: Cão',
            start: new Date(2024, 10, 10),
            end: new Date(2024, 10, 10),
          },

          {
            id: 2,
            title: 'DTS STARTS',
            start: new Date(2024, 2, 13, 0, 0, 0),
            end: new Date(2024, 2, 20, 0, 0, 0),
          },
        ]}
        startAccessor="start"
        endAccessor="end"
        style={{ maxWidth: 800, height: 400, fontSize: '12px' }}
      />
    </div>

  )
}
export default ScheduleComponent
