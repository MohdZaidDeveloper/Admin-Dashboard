import "./Chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {

  const data = [
    { name: "Jan",total: 1234 },
    { name: "Feb", total: 4325 },
    { name: "March", total: 6487 },
    { name: "April", total: 987 },
    { name: "May", total: 1285 },
    { name: "June", total: 5643 },
    { name: "July", total: 8795 },


 
  ];
  return (
    <div className="chart">
      <h2 className="title">Last Six Months Revenue</h2>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="total" stackId="1" stroke="#8884d8" fill="#8884d8" />
         
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart