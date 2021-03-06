/*
 * The reducer takes care of our data
 * Using actions, we can change our application state
 * To add a new action, add it to the switch statement in the homeReducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return assign({}, state, {
 *       stateVariable: action.var
 *   });
 *
 * To add a new reducer, add a file like this to the reducers folder, and
 * add it in the rootReducer.js.
 */

import { CHANGE_FILTER, UPDATE_RESOURCES } from '../constants/AppConstants';
import assignToEmpty from '../utils/assign';

const initialState = {
  filter: 'all',
  agents: [
    {
      id: 1,
      name: 'bjstdmngbgr02.thoughtworks.com',
      image: 'http://placehold.it/50x50',
      status: 'idle',
      IP: '192.168.1.2',
      path: '/var/lib/cruise-agent',
      type: 'physical',
      resources: [
        'ubuntu',
        'firefox3',
        'core-duo'
      ]
    },
    {
      id: 2,
      name: 'bjstdmngbgr03.thoughtworks.com',
      image: 'http://placehold.it/50x50',
      status: 'building',
      IP: '192.168.1.3',
      path: '/var/lib/cruise-agent',
      type: 'physical',
      resources: [
        'ubuntu',
        'firefox3',
        'mysql',
        'core-duo'
      ]
    },
    {
      id: 3,
      name: 'bjstdmngbgr04.thoughtworks.com',
      image: 'http://placehold.it/50x50',
      status: 'building',
      IP: '192.168.1.4',
      path: '/var/lib/cruise-agent',
      type: 'physical',
      resources: [
        'ubuntu',
        'firefox3',
        'mysql',
        'core-duo'
      ]
    },
    {
      id: 4,
      name: 'bjstdmngbgr05.thoughtworks.com',
      image: 'http://placehold.it/50x50',
      status: 'idle',
      IP: '192.168.1.5',
      path: '/var/lib/cruise-agent',
      type: 'physical',
      resources: []
    },
    {
      id: 5,
      name: 'bjstdmngbgr01.thoughtworks.com',
      image: 'http://placehold.it/50x50',
      status: 'idle',
      IP: '192.168.1.1',
      path: '/var/lib/cruise-agent',
      type: 'virtual',
      resources: [
        'ubuntu',
        'firefox3',
        'mysql',
        'core-duo'
      ]
    },
    {
      id: 6,
      name: 'bjstdmngbgr06.thoughtworks.com',
      image: 'http://placehold.it/50x50',
      status: 'building',
      IP: '192.168.1.6',
      path: '/var/lib/cruise-agent',
      type: 'virtual',
      resources: [
        'ubuntu',
        'firefox3',
        'mysql'
      ]
    }
  ],
  historicalAgents: [
    'bjstdmngbgr02/Acceptance_test',
    'bjstdmngbgr02/Acceptance_test',
    'bjstdmngbgr02/Acceptance_test',
    'bjstdmngbgr02/Acceptance_test',
    'bjstdmngbgr02/Acceptance_test',
    'bjstdmngbgr02/Acceptance_test',
    'bjstdmngbgr02/Acceptance_test',
    'bjstdmngbgr02/Acceptance_test',
    'bjstdmngbgr02/Acceptance_test',
    'bjstdmngbgr02/Acceptance_test'
  ]
};

function agentsReducer(state = initialState, action) {

  Object.freeze(state); // Don't mutate state directly, always use assign()!

  switch (action.type) {

    case CHANGE_FILTER:

      return assignToEmpty(state, {
        filter: action.filter
      });

      break;

    case UPDATE_RESOURCES:

      return assignToEmpty(state, {
        agents: action.agents
      });

      break;

    default:

      return state;

  }

}

export default agentsReducer;