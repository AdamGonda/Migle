import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createProject } from '../../redux/actions/project'
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import Style from 'styled-components'
import Module from '../Module/Module'
import OutliedStarIcon from './assets/outlined star icon.svg'
import PersonIcon from './assets/person icon.svg'
import TeamIcon from './assets/team icon.svg'

const Home = ({ projects, createProject }) => {
  return (
    <Wrapper>
      <Module
        icon={<img alt="star" src={OutliedStarIcon} />}
        name={'Starred'}
        // items={projects}
      />
      <Module
        icon={<img alt="star" src={PersonIcon} />}
        name={'Personal'}
        // items={projects}
        // moduleAction={createProject}
      />
      <Module
        icon={<img alt="star" src={TeamIcon} style={{ width: '25px' }} />}
        name={'Team'}
        // items={projects}
        // moduleAction={createProject}
      />
    </Wrapper>
  )
}

const mapStateToProps = state => {
  return {
    projects: state.fireStore.ordered.projects
  }
}

export default compose(
  connect(
    mapStateToProps,
    { createProject }
  ),
  firestoreConnect([{ collection: 'projects' }])
)(Home)

const Wrapper = Style.div`
  padding: 15px 60px;
`
