import React from 'react'
import FeaturedInfo from '../../component/featuredinfo/FeaturedInfo';
import WidgetLg from '../../component/homeWidged/widgetLg/WidgetLg';
import Widgetsm from '../../component/homeWidged/WidgetSm/Widgetsm';
import './home.css';




export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <div className="homeWidgets">
                <Widgetsm />
                <WidgetLg />
            </div>
        </div>
    )
}
