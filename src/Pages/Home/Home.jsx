import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Widget from "../../Components/Widget/Widget";

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ApiIcon from '@mui/icons-material/Api';


import Chart from "../../Components/Chart/Chart";
import Featured from "../../Components/Featured/Featured";
import HomeTable from "../../Components/Table/Table";


import "./Home.scss";

const Home = () => {
  const data = [
    {
      title: "USERS",
      counter: "27832",
      link: "See all users",
      value: "positive",
      amount: "20%",
      arrow: <KeyboardArrowUpIcon />,
      icon: <PersonIcon className="icon" />
    },
    {
      title: "ORDERS",
      counter: "3832",
      link: "See all orders",
      value: "negative",
      amount: "10%",
      arrow: <ExpandMoreIcon />,
      icon: <ShoppingCartIcon className="icon" />
    },
    {
      title: "EARNINGS",
      counter: "27832",
      link: "See all users",
      value: "negative",
      amount: "25%",
      arrow: <ExpandMoreIcon />,
      icon: <ApiIcon className="icon" />
    },
    {
      title: "BALANCE",
      counter: "270832",
      link: "See all balance",
      value: "positive",
      amount: "52%",
      arrow: <KeyboardArrowUpIcon />,
      icon: <LocalLibraryIcon className="icon" />
    },
  ]

  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="widgets">
          {
            data && data.map((item) => {
              const { title, counter, link, value, amount, arrow, icon } = item;
              return (
                <Widget title={title} counter={counter} link={link} value={value} amount={amount} arrow={arrow} icon={icon} />
              )
            })
          }
        </div>

        <div className="charts">  
          <Featured />
          <Chart />
        </div>

        <div className="list">
          <HomeTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
