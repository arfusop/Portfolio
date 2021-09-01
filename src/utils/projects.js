import {
    FaCcStripe,
    FaNodeJs,
    FaReact,
    FaGoogle,
    FaCalendar
} from 'react-icons/fa'
// import { FcCalendar } from 'react-icons/fc'
import { GrGraphQl } from 'react-icons/gr'
import { DiMongodb } from 'react-icons/di'
import { TiWeatherStormy } from 'react-icons/ti'

export const PROJECTS = [
    {
        title: 'Model Insights',
        description:
            'Portfolio website for a fashion model, showcasing her work & offering zoom consultations to potential customers. Custom CMS & Backend designed to cater to this websites needs.',
        tech: [
            {
                title: 'Stripe',
                Icon: <FaCcStripe key="Stripe" title="Stripe" />
            },
            {
                title: 'Calendly',
                Icon: <FaCalendar key="Calendly" title="Calendly" />
            },
            {
                title: 'GraphQL',
                Icon: <GrGraphQl key="GraphQL" title="GraphQL" />
            },
            {
                title: 'MongoDB',
                Icon: <DiMongodb key="MongoDB" title="MongoDB" />
            },
            { title: 'NodeJS', Icon: <FaNodeJs key="NodeJS" title="NodeJS" /> },
            {
                title: 'ReactJS',
                Icon: <FaReact key="ReactJS1" title="ReactJS" />
            }
        ],
        img: 'https://via.placeholder.com/468x500?text=Model Insights',
        url: 'www.espn.com'
    },
    {
        // update the tech here
        title: 'Weatheroni',
        description: 'Weather app that shows current & future forecasts.',
        tech: [
            {
                title: 'WeatherAPI',
                Icon: <TiWeatherStormy key="WeatherAPI" title="WeatherAPI" />
            },
            {
                title: 'Google GeoLocation',
                Icon: (
                    <FaGoogle
                        key="Google GeoLocation"
                        title="Google GeoLocation"
                    />
                )
            },
            {
                title: 'ReactJS',
                Icon: <FaReact key="ReactJS2" title="ReactJS" />
            }
        ],
        img: 'https://via.placeholder.com/468x60?text=Weatheroni',
        url: 'www.yahoo.com'
    }
]
