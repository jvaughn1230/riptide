import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import BugReportIcon from '@mui/icons-material/BugReport';

export const NavbarData = [
    {
        id: 1,
        title: "Home",
        icon: <HomeOutlinedIcon />,
        link: "/home"
    },
    {
        id: 2,
        title: "Data",
        icon: <BarChartIcon />,
        link: "/data"
    },
    {
        id: 3,
        title:"Add Bug",
        icon:<BugReportIcon />,
        link: "/addBug"
    },
    
];