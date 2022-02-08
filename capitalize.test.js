import { capitalize } from "./capitalize"

test('basic check', ()=>{
    expect(capitalize('hello')).toBe('Hello');
})

test('more basic check', ()=>{
    expect(capitalize('there')).toBe('There');
})

test('Already capital', ()=>{
    expect(capitalize('Hello')).toBe('Hello');
})

test('empty input check', ()=>{
    expect(capitalize('')).toBe('');
})

test('string with space', ()=>{
    expect(capitalize("hello there")).toBe("Hello there");
})

test('numbered first charactor', ()=>{
    expect(capitalize('4hello')).toBe('4hello');
})

test('special first charactor', ()=>{
    expect(capitalize('*hello')).toBe('*hello');
})