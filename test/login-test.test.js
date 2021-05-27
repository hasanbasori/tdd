const login = require("../main")


test('if username and password are correct , return true', ()=>{
    expect(login("test","12345")).toBe(true)
})