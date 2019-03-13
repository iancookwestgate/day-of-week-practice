import { processDate } from './../src/index.js';

describe('Date', function() {
  let inputStuff;
  beforeEach(function() {
    let userInput = [10, 23, 2009];
    inputStuff = new processDate(userInput[0], userInput[1], userInput[2]);
  });

  it('should reveal what month it is', function(){
    expect(inputStuff.thisMonth()).toEqual("October");
  })
  it('should reveal what day of the week it is', function() {
    expect(inputStuff.day).toEqual(23);
  })
  it('should reveal what day of the week it is', function() {
    expect(inputStuff.year).toEqual(2009);
  });
});
