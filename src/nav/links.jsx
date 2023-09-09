import { AiOutlineDashboard} from "react-icons/ai";
import { MdOutlineAccountCircle} from "react-icons/md";
import { TbReportSearch} from "react-icons/tb";
import { TbFileAnalytics} from "react-icons/tb";
import { TbDeviceAnalytics} from "react-icons/tb";
import { TbCircleLetterX} from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import { TbCashOff} from "react-icons/tb";
export const links = [
    {
        title: 'Home',
        links: [
            {
                name: 'dashboard',
                icon: <AiOutlineDashboard />,
            },
            {
                name: 'account',
                icon: <MdOutlineAccountCircle/>,
            },
            {
                name: 'reports',
                icon: <TbReportSearch />,
            },
        ],
    },
    {
        title: 'Tools',
        links: [
            {
                name: 'digit analysis tool',
                icon: <TbFileAnalytics />,
            },
            {
                name: 'free even odd bot',
                icon: <VscGraph />,
            },
            {
                name: 'free strategy',
                icon: <TbCashOff />,
            },
            {
                name: 'inclusive x bot',
                icon: <TbCircleLetterX/>,
            },
            {
                name: 'free over under bot',
                icon: <TbDeviceAnalytics />,
            },
        ]
    },

    {
        title: 'Other',
        links: [
            {
                name: 'about derivatory',
                icon: <TbFileAnalytics />,
            },
            {
                name: 'help center',
                icon: <VscGraph />,
            },
            {
                name: 'login',
                icon: <TbCashOff />,
            },
        ]
    }
];

export const themeColors = [
    {
        name: 'blue-theme',
        color: '#1A97F5',
    },
    {
        name: 'green-theme',
        color: '#38FF14',
    },
    {
        name: 'purple-theme',
        color: '#DF00FE',
    },
    {
        name: 'red-theme',
        color: '#FF1818',
    },
    {
        name: 'indigo-theme',
        color: '#1E4DB7',
    },
    {
        color: '#FF6700',
        name: 'orange-theme',
    },
];
