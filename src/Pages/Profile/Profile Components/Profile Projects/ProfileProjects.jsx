import React from 'react'
import { Link } from 'react-router-dom'
import ProjectsTaskCard from './ProjectsTaskCard'

export default function ProfileProjects() {
  return (
    <>  
        <div className="profile-projects">
            <div className="profile-projects-container">
                <div className="profile-projects-top-section">
                    <h1 className="profile-projects-header-txt">
                        Project and tasks
                    </h1>
                    <Link to={"/TodoList"}>
                        <button className="profile-projects-top-section-btn">
                            Open task manager
                            <i className="fa-solid fa-arrow-up-right-from-square profile-projects-top-section-btn-icon"></i>
                        </button>
                    </Link>
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
                <div className="profile-projects-tasks-section">
                    <div className="profile-projects-tasks-section-container">
                        <ProjectsTaskCard dotColor="red" filterName="Canceled"/>
                        <ProjectsTaskCard dotColor="gray" filterName="To do"/>
                        <ProjectsTaskCard dotColor="green" filterName="Done"/>
                        <ProjectsTaskCard dotColor="red" filterName="Canceled"/>
                        <ProjectsTaskCard dotColor="green" filterName="Done"/>
                        <ProjectsTaskCard dotColor="gray" filterName="To do"/>
                        <ProjectsTaskCard dotColor="green" filterName="Done"/>
                        <ProjectsTaskCard dotColor="red" filterName="Canceled"/>
                        <ProjectsTaskCard dotColor="red" filterName="Canceled"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
