import { produce } from 'immer';

// Your function to be tested
function updateStateWithImmer(currentState, newName) {
    return produce(currentState, (draftState) => {
        // Update the draft state with the new value
        draftState.name = newName;
    });
}

describe('updateStateWithImmer', () => {
    it('should correctly update the state and ensure immutability', () => {
        // Create a sample initial state
        const initialState = { name: 'ak', age:33 };

        // Call the function to update the state
        const newState = updateStateWithImmer(initialState, 'am');

        // Check if the state has been updated correctly
        expect(newState.name).toBe('am');

        // Check that the original state remains unchanged (immutable)
        expect(initialState.age).toBe(33);

        // Check that the objects are not the same reference (immutability)
        expect(newState).not.toBe(initialState);

        // Check that the objects have the same content (structural equality)
        expect(newState).toEqual({ name: 'am', age: 33 });
        expect(initialState).toEqual({ name:'ak', age: 33 });
    });

    it('test cannot modify immutable state', () => {
        const initialState = { name: 'ak', age:33 };

        // Call the function to update the state
        const newState = updateStateWithImmer(initialState, 'am');

        try {
            newState.name = 'modifiedName'; // Try to modify newState
        } catch (error) {
            // Assert that an error was thrown
            expect(error).toBeInstanceOf(Error);
            // You can also check the error message if needed
            // expect(error.message).toBe('Cannot assign to read only property...');
        }
    } );
});
