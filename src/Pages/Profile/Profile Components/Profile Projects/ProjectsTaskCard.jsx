import React from 'react'

export default function ProjectsTaskCard({dotColor, filterName}) {
  return (
    <>  
        <div className="project-task-card">
            <div className="project-task-card-container">
                <p className="project-task-card-header-txt">23.01.24/01:32-02:15</p>
                <article className="project-task-card-task-txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit iure dolore ab.</article>
                <div className="project-task-card-bottom-section">
                    <div className="project-task-card-bottom-section-filter-box">
                        <div className="project-task-card-bottom-section-filter-box-highlight-dot" style={{backgroundColor: dotColor}}></div>
                        <p className="project-task-card-bottom-section-filter-box-txt">{filterName}</p>
                    </div>
                    <button className="project-task-card-bottom-section-filter-box-link-btn">
                        <i className="fa-solid fa-arrow-up-right-from-square project-task-card-bottom-section-filter-box-link-btn-icon"></i>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}
