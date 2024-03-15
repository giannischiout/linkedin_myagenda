'use client'
import { useMemo } from 'react'
import { Calendar, dateFnsLocalizer,  Views, dates} from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
    'en-US': enUS,
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})
const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];
export default function ReactBigCalendar() {
    const { components, defaultDate, max, views } = useMemo(
        () => ({
        //   components: {
        //     timeSlotWrapper: ColoredDateCellWrapper,
        //   },
          defaultDate: new Date(2015, 3, 1),
          views: Object.keys(Views).map((k) => Views[k]),
        }),
        []
      )
    return (
        <div>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 130px)' }}
                views={['month', 'week', 'day']}
                defaultView="week"
            />
        </div>
    )
}