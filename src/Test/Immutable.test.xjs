import {List, Map} from 'immutable'
// jest.unmock('immutable')
describe('immutability', () => {

  describe('a number', () => {

    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).toBe(43);
      expect(state).toBe(42);
    });

  });

  // test on list
  describe('a list', () => {

    function addMovie(currentState, movie) {
      return currentState.push(movie);
    }

    it('is immutable', () => {
      let state = List.of('Trainspotting', '28 Days Later');
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).toEqual(List.of(
        'Trainspotting',
        '28 Days Later',
        'Sunshine'
      ))

      expect(state).toEqual(List.of(
        'Trainspotting',
        '28 Days Later'
      ))

    })
  });

  // test on mapping the array
  describe('a tree', () => {

  function addMovie(currentState, movie) {
    return currentState.update('movies', movies => movies.push(movie));
  }

  it('is immutable', () => {
    let state = Map({
      movies: List.of('Trainspotting', '28 Days Later')
    });
    let nextState = addMovie(state, 'Sunshine');

    expect(nextState).toEqual(Map({
      movies: List.of(
        'Trainspotting',
        '28 Days Later',
        'Sunshine'
      )
    }));
    expect(state).toEqual(Map({
      movies: List.of(
        'Trainspotting',
        '28 Days Later'
      )
    }));
  });

});

});


// describe('it works',()=>{
//   it('should just work',()=>{
//     let li = List.of(1,3)
//     expect(li.size).toBe(2)
//   })
// })
