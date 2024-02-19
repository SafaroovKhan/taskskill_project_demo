import React from 'react'

export default function ProfileAboutMe() {
  return (
    <>
        <div className="profile-aboutme">
            <div className="profile-aboutme-container">
                <div className="aboutme-top-section">
                    <div className="aboutme-top-section-header">
                        <h1 className="aboutme-header">
                            About
                        </h1>
                        <button className="aboutme-top-section-btn">
                            <i class="fa-solid fa-pen aboutme-top-section-btn-icon"></i>
                        </button>
                    </div>
                    <article className="aboutme-content-article">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sint dicta provident qui quaerat obcaecati earum dolorem aperiam, ipsam odio iusto similique nisi in, magni placeat. Ipsam quod odit nobis?
                    </article>
                </div>
                <div className="aboutme-goals">
                    <div className="aboutme-goals-top-section">
                        <div className="aboutme-goals-top-section-header">
                            <h1 className="aboutme-goals-top-section-header-txt">
                                Goals
                            </h1>
                            <button className="aboutme-goals-top-section-btn">
                                <i class="fa-solid fa-eye aboutme-goals-top-section-btn-icon"></i>
                                Read more
                            </button>
                        </div>
                        <article className="aboutme-goals-article">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam, explicabo voluptate, id harum tempora doloremque quasi porro vero perspiciatis reiciendis in nemo nisi. Iste optio ipsum fugit eligendi ex?
                        </article>
                    </div>
                    <div className="aboutme-goals-card-container">
                        <div className="aboutme-goals-card">
                            <h1 className="aboutme-goals-card-header">
                                Weekly
                            </h1>
                            <p className="aboutme-goals-card-goal-txt">C#</p>
                            <p className="aboutme-goals-card-goal-txt">C++</p>
                            <p className="aboutme-goals-card-goal-txt">.Net</p>
                        </div>
                        <div className="aboutme-goals-card">
                            <h1 className="aboutme-goals-card-header">
                                Monthly
                            </h1>
                            <p className="aboutme-goals-card-goal-txt">HTML</p>
                            <p className="aboutme-goals-card-goal-txt">CSS</p>
                            <p className="aboutme-goals-card-goal-txt">BootStrap</p>
                        </div>
                        <div className="aboutme-goals-card">
                            <h1 className="aboutme-goals-card-header">
                                Yearly
                            </h1>
                            <p className="aboutme-goals-card-goal-txt">Frontend Development</p>
                            <p className="aboutme-goals-card-goal-txt">Backend Development</p>
                            <p className="aboutme-goals-card-goal-txt">DSA and Algos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
