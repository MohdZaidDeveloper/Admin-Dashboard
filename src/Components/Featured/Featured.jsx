import "./Featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';


const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <div className="title">
          <h2>Total Revenue</h2>

        </div>
        <MoreVertIcon className="icon" />
      </div>

      <div className="bottom">
        <div className="featured-chart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={4} />
        </div>
       <div className="desc">
          <p className="title">Total sales</p>
          <p >$234</p>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing</p>
       </div>
      </div>
    </div>
  )
}

export default Featured