/* components */
import Router from './Router'
import Link from './Link'
import IndexLink from './IndexLink'

/* components (configuration) */
import IndexRedirect from './IndexRedirect'
import IndexRoute from './IndexRoute'
import Redirect from './Redirect'
import Route from './Route'

/* mixins */
import History from './History'
import Lifecycle from './Lifecycle'
import RouteContext from './RouteContext'

/* utils */
import useRoutes from './useRoutes'
import { createRoutes } from './RouteUtils'
import RouterContext from './RouterContext'
import RoutingContext from './RoutingContext'
import PropTypes from './PropTypes'
import match from './match'
import useRouterHistory from './useRouterHistory'
import { formatPattern } from './PatternUtils'

/* histories */
import browserHistory from './browserHistory'
//import hashHistory from './hashHistory'
//import createMemoryHistory from './createMemoryHistory'

export {
    Router,
    Link,
    IndexLink,
    IndexRedirect,
    IndexRoute,
    Redirect,
    Route,
    History,
    Lifecycle,
    RouteContext,
    useRoutes,
    createRoutes,
    RouterContext,
    RoutingContext,
    PropTypes,
    match,
    useRouterHistory,
    formatPattern,
    browserHistory
    //hashHistory,
    //createMemoryHistory
}
