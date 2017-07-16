import { injectReducer } from '../../store/reducers'

export default store => ({
  path: '/reliability',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure(
      [],
      require => {
        /*  Webpack - use require callback to define
          dependencies for bundling   */
        const Reliability = require('./containers/ReliabilityContainer').default
        const reducer = require('./modules/reliability').default

        /*  Add the reducer to the store on key 'counter'  */
        injectReducer(store, { key: 'reliability', reducer })

        /*  Return getComponent   */
        cb(null, Reliability)

        /* Webpack named bundle   */
      },
      'counter'
    )
  }
})
