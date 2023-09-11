import { describe, it, expect } from "vitest"
import { myCalc } from "./main.js"

describe('String Calculator test', () => {
  it('should return 0 with empty str', () => {
    expect(myCalc('')).toEqual(0);
  })

  it('should return 1 with string 1', () => {
    expect(myCalc('1')).toEqual(1);
  })

  it('should return 3 with 1,2', () => {
    expect(myCalc('1,2')).toEqual(3);
  })

  it('should return 10 with 1,2,3,4', () => {
    expect(myCalc('1,2,3,4')).toEqual(10);
  })

  it('should return 20 with 1,2,3,4,10', () => {
    expect(myCalc('1,2,3,4,10')).toEqual(20);
  })
})
