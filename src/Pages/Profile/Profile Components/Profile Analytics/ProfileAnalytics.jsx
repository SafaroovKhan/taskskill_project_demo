import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



export default function ProfileAnalytics() {


    const data = [
        { name: 'Week 1', value: 400 },
        { name: 'Week 2', value: 300 },
        { name: 'Week 3', value: 200 },
        { name: 'Week 4', value: 278 },
        { name: 'Week 5', value: 189 },
    ];


  return (
    <>
        <div className="profile-analytics">
            <div className="profile-analytics-container">
                <div className="profile-projects-top-section">
                    <h1 className="profile-projects-header-txt">
                        Analytics
                    </h1>
                </div>
                <div className="profile-projects-date-section">
                    <div className="profile-projects-date-section-calendar-box">
                        <button className="profile-projects-date-section-calendar-box-btn">
                            <i className="fa-solid fa-chevron-left profile-projects-date-section-calendar-box-btn-icon"></i>
                        </button>
                        <button className="profile-projects-date-section-calendar-box-btn">
                            <i className="fa-solid fa-chevron-right profile-projects-date-section-calendar-box-btn-icon"></i>
                        </button>
                        <button className="profile-projects-date-section-calendar-box-date-btn">
                            <i className="fa-solid fa-calendar profile-projects-date-section-calendar-box-date-btn-icon"></i>
                            <p className="profile-projects-date-section-calendar-box-date-btn-txt">
                                2024, 14 February
                            </p>
                        </button>
                    </div>
                    <button className="profile-projects-date-section-dately-btn">
                        <p className="profile-projects-date-section-dately-btn-txt">
                            Weekly
                        </p>
                        <i className="fa-solid fa-chevron-down profile-projects-date-section-dately-btn-icon"></i>
                    </button>
                </div>
                <div className="profile-projects-stats-section">
                    <div className="profile-projects-stats-card">
                        <p className="profile-projects-stats-card-header">Total time spend</p>
                        <h1 className="profile-projects-stats-card-txt">12 h. 42m.</h1>
                    </div>
                    <div className="profile-projects-stats-card">
                        <p className="profile-projects-stats-card-header">Total tasks and projects</p>
                        <h1 className="profile-projects-stats-card-txt">136</h1>
                    </div>
                    <div className="profile-projects-stats-card">
                        <p className="profile-projects-stats-card-header">Done tasks</p>
                        <h1 className="profile-projects-stats-card-txt">122</h1>
                    </div>
                    <div className="profile-projects-stats-card">
                        <p className="profile-projects-stats-card-header">Canceled tasks</p>
                        <h1 className="profile-projects-stats-card-txt">14</h1>
                    </div>
                    <div className="profile-projects-stats-card">
                        <p className="profile-projects-stats-card-header">Growth</p>
                        <h1 className="profile-projects-stats-card-txt">36%</h1>
                    </div>
                </div>
                <div className="profile-analytics-chart-section">
                    <LineChart width={1100} height={300} data={data}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </div>
            </div>
        </div>
    </>
  )
}
