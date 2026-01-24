import { sum } from "../components/sum";

it('sum function should return the addition of two numbers', ()=>{
    const result = sum(3, 4);
    expect(result).toBe(7)
})