const {checkSeatStatus, getRowNumber, book} = require("../homework");


describe('checkSeatStatus', () => {
  it('CheckSeatStatus is a function',() => {
      expect(typeof checkSeatStatus).toBe('function')
  } );
  
  it('CheckSeatStatus First Parameter is a string', ()=>{
    expect(()=> checkSeatStatus(4)).toThrow(new TypeError('First parameter is not a string'));
  });
  
  it('CheckSeatStatus Second Parameter is a number', ()=>{
    expect(()=> checkSeatStatus('A', '2')).toThrow(new TypeError('Second parameter is not a number'));
  });

  it('should return true if the given seat defined by row and column is booked', () => {
    expect(checkSeatStatus('A', 1)).toBe(true);
  });
  
  it('should return false if the given seat defined by row and column is not booked', () => {
    expect(checkSeatStatus('E', 3)).toBe(false);
  });

});

describe('getRowNumber', ()=>{
  it('should return 1 if the letter given is an A', () => {
    expect(getRowNumber('A')).toBe(0);
  });
  
  it('should return 3 if the letter given is a C', () => {
    expect(getRowNumber('C')).toBe(2);
  });

});

describe('book', () => {
  it('should return "Seat in XX successfully booked" if the given seat is not booked', () => {
    expect(checkSeatStatus('E',3)).toBe(false);
    expect(book('E',3)).toBe('Seat in E3 successfully booked');
    expect(checkSeatStatus('E',3)).toBe(true);
  });
  
  it('should return "Seat in XX is already booked" if the given seat is already booked', () => {
    expect(book('A',1)).toBe('Seat in A1 is already booked');
  });
});




