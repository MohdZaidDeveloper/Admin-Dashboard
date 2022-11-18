import "./Widget.scss"


const Widget = (props) => {
    const { title, counter, link, value, amount, arrow, icon }= props
    return (
        <div className="widget">
            <div className="left">
                <div className="title">{title}</div>
                <div className="counter">{counter}</div>
                <div className="link">{link}</div>


            </div>
            <div className="right">
                <div className={`percentage ${value}`}>
                    {arrow}
                  {amount}
                </div>
                {icon}
            </div>
        </div>

    )
}

export default Widget