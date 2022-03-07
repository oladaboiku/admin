import React from 'react';
import './widgetLg.css';

function WidgetLg() {

    const Button = ({type}) =>{
      return <button className={"widgetLgButton" + type}>{type}</button>
    }
  return (
    <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest Transcations</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widget">Customer</th>
            <th className="widget">Date</th>
            <th className="widget">Amount</th>
            <th className="widget">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.pexels.com/photos/10663495/pexels-photo-10663495.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Mar 2022</td>
            <td className="widgetLgAm">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved"/>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.pexels.com/photos/10663495/pexels-photo-10663495.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Mar 2022</td>
            <td className="widgetLgAm">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined"/>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.pexels.com/photos/10663495/pexels-photo-10663495.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Mar 2022</td>
            <td className="widgetLgAm">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending"/>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.pexels.com/photos/10663495/pexels-photo-10663495.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Mar 2022</td>
            <td className="widgetLgAm">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved"/>
            </td>
          </tr>
        </table>
    </div>
  )
}

export default WidgetLg