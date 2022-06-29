import { Greeter } from "../Greeter"

test("greet with name", () => {
    const greeting = new Greeter('shelby');
    expect(greeting.name).toBe('shelby');
})

