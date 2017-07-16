import { connect } from 'react-redux'

import {
  getDataForDate,
  selectDirection,
  selectLine
} from '../modules/reliability'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import Reliability from '../components/Reliability'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  getDataForDate,
  selectDirection,
  selectLine
}

const mapStateToProps = state => ({ reliability: state.reliability })

export default connect(mapStateToProps, mapDispatchToProps)(Reliability)
