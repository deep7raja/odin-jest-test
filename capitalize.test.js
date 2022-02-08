import { capitalize } from "./capitalize"

test('basic check', ()=>{
    expect(capitalize('hello')).toBe('Hello');
})