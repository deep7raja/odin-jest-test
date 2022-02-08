import { reverseString } from "./reverseString"

test('basic', ()=>{
    expect(reverseString('hello')).toBe('olleh');
})