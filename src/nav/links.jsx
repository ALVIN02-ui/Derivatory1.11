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
                name: 'datool',
                icon: <TbFileAnalytics />,
            },
            {
                name: 'evenodd',
                icon: <VscGraph />,
            },
            {
                name: 'freestrat',
                icon: <TbCashOff />,
            },
            {
                name: 'inclusivex',
                icon: <TbCircleLetterX/>,
            },
            {
                name: 'overunder',
                icon: <TbDeviceAnalytics />,
            },
        ]
    }
];
