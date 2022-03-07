import React from 'react';
import './widgetSm.css';
import {Visibility} from '@mui/icons-material';

function WidgetSm() {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListIte">
                <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer </span>
                </div>
            </li>
        </ul>
        <button>
            <Visibility/>
        </button>
    </div>
  )
}

export default WidgetSm