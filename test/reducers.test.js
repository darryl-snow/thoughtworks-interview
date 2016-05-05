import expect from 'expect';
import agentsReducer from '../js/reducers/agentsReducer';
import * as constants from '../js/constants/AppConstants';

// Test Reducer
describe('defaultReducer', () => {
  // Test that the initial state is returning correctly
  it('should return the initial state', () => {
    expect(agentsReducer(undefined, {})).toEqual({
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
    });
  });

  // Test that it handles changing the filter correctly
  it('should handle the CHANGE_FILTER action', () => {

    const filter = 'physical';

    expect(
      agentsReducer({}, {
        type: constants.CHANGE_FILTER,
        filter
      })
    ).toEqual({
      filter: filter
    });
  });

  // Test that it handles updating the resources correctly
  it('should handle the UPDATE_RESOURCES action', () => {

    const agents = [
      {
        resources: [1,2,3]
      },
      {
        resources: [4,5,6]
      }
    ];

    expect(
      agentsReducer({}, {
        type: constants.UPDATE_RESOURCES,
        agents
      })
    ).toEqual({
      agents: agents
    });

  });

});
