import { expect, test, vi, describe, it, afterAll } from 'vitest' // 👈🏻 Added the `vi` import

afterAll(() => {
    vi.restoreAllMocks()
})

vi.mock("../src/prisma/client")
import { CreateUserUseCase } from '../src/modules/users/useCases/CreateUser/CreateUserUseCase';

describe('Create user spec', () => {

    it('Should throw if account exist', async () => {
        const userUseCase = new CreateUserUseCase();

        const emailFixture = () => {
            return Math.random().toString(36).substring(7) + '@gmail.com'
        }
        const email = emailFixture()
        const client = await import('../src/prisma/client')
        client.default.user.findUnique = vi.fn().mockResolvedValueOnce(
            {
                email,
                id: "uuid",
                name: 'SomeName',
                password: 'someHash'

            }
            )
       
        try {
            await userUseCase.execute({
                name: 'rafa@gmail.com',
                email,
                password: ''
            })
            expect(false).toBeTruthy()
        } catch (error: any) {
            expect(error.message).toBe("User already exists")
        }

    })

    it('Should create otherwise', async () => {

        const emailFixture = () => {
            return Math.random().toString(36).substring(7) + '@gmail.com'
        }
        const email = emailFixture()
        const client = await import('../src/prisma/client')
        client.default.user.findUnique = vi.fn().mockResolvedValueOnce(undefined)

        const userUseCase = new CreateUserUseCase();
        client.default.user.create = vi.fn().mockResolvedValueOnce({
            
            name: 'rafa@gmail.com',
            email: email + "1",
            password: ''
            
        })
        await userUseCase.execute({
            name: 'rafa@gmail.com',
            email: email + "1",
            password: ''
        })
        expect(client.default.user.create).toHaveBeenCalled()

    })

})