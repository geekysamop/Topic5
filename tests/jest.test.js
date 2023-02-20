const addNums = (num1,num2) =>{
    return num1+num2;
}

test('test add number function',()=>{
    expect(addNums(1,2)).toBe(4);
});