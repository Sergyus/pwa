import rewire from "rewire"
const index = rewire("./index")
const normalizePort = index.__get__("normalizePort")
const onListening = index.__get__("onListening")
// @ponicode
describe("normalizePort", () => {
    test("0", () => {
        let callFunction: any = () => {
            normalizePort("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            normalizePort("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            normalizePort("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            normalizePort("")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("onListening", () => {
    test("0", () => {
        let callFunction: any = () => {
            onListening()
        }
    
        expect(callFunction).not.toThrow()
    })
})
