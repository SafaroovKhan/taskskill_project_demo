import React from 'react'
import ProfileHeader from './Profile Components/ProfileHeader'
import ProfileAboutMe from './Profile Components/ProfileAboutMe'
import ProfileProjects from './Profile Components/Profile Projects/ProfileProjects'
import ProfileAnalytics from './Profile Components/Profile Analytics/ProfileAnalytics'
import ProfileExp from './Profile Components/Profile Experience/ProfileExp'
export default function Profile() {
  return (
      <div className='profile-page'>
          <ProfileHeader/>
          <ProfileAboutMe/>
          <ProfileProjects/>
          <ProfileAnalytics/>
          <ProfileExp headerTxt="Experience"/>
          <ProfileExp headerTxt="Volunteering and Mentoring"/>
          <ProfileExp headerTxt="Education"/>
      </div>
  )
}
