import expect from 'expect';
import { changeFilter, updateResources } from '../js/actions/AppActions';
import { CHANGE_FILTER, UPDATE_RESOURCES } from '../js/constants/AppConstants';

// Test actions from AppActions.js
describe('AppActions', () => {

  describe('changeFilter', () => {

    it('should change the active filter', () => {

      const filter = 'physical';

      const expectedResult = {
        type: CHANGE_FILTER,
        filter
      };

      expect(changeFilter(filter)).toEqual(expectedResult);

    })

  });

  // Test changeProjectName action
  describe('updateResources', () => {

    it('should update the resources for an agent', () => {

      const agents = [
        {
          resources: [1,2,3]
        },
        {
          resources: [4,5,6]
        }
      ];

      const expectedResult = {
        type: UPDATE_RESOURCES,
        agents
      };

      expect(updateResources(agents)).toEqual(expectedResult);


    });

  });
});