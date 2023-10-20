import { StatusCodes } from 'http-status-codes'
import { testServer } from '../jest.setup'

describe('Cidades - UpdateById', () => {


    it('Atualiza registro', async () => {

        const res1 = await testServer
            .post('/cidades')
            .send({nome: 'Astorga'})

        expect(res1.statusCode).toEqual(StatusCodes.CREATED)

        const resAtualizada = await testServer
            .put(`/cidades/${res1.body}`)
            .send({nome: 'Astorga-PR'})
            
        expect(resAtualizada.statusCode).toEqual(StatusCodes.OK)
    })

    it('Tenta atualizar registro que não existe', async () => {

        const res1 = await testServer
            .put('/cidades/99999')
            .send({nome: 'Astorga'})
            
        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
        expect(res1.body).toHaveProperty('errors.default')
    })


    /*
    it('Tenta atualizar registro com nome menor que 3 caracteres', async () => {

        const res1 = await testServer
            .put('/cidades/1')
            .send({nome: 'As'})

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST)
        expect(res1.body).toHaveProperty('errors.body.nome')
    })

    it('Tenta atualizar registro enviando nome vazio', async () => {

        const res1 = await testServer
            .put('/cidades/1')
            .send({nome: ''})

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST)
        expect(res1.body).toHaveProperty('errors.body.nome')
    })

    it('Tenta atualizar registro com id = 0', async () => {

        const res1 = await testServer
            .put('/cidades/0')
            .send({nome: 'Astorga'})

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST)
        expect(res1.body).toHaveProperty('errors.params.id')
    })

    it('Tenta atualizar registro com id = não inteiro', async () => {

        const res1 = await testServer
            .put('/cidades/1.1')
            .send({nome: 'Astorga'})

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST)
        expect(res1.body).toHaveProperty('errors.params.id')
    })

    it('Tenta atualizar registro sem id', async () => {

        const res1 = await testServer
            .put('/cidades')
            .send({nome: 'Astorga'})

        expect(res1.statusCode).toEqual(StatusCodes.NOT_FOUND)
    })

    it('Tenta atualizar registro com nome vazio e sem id', async () => {

        const res1 = await testServer
            .put('/cidades')
            .send({nome: ''})

        expect(res1.statusCode).toEqual(StatusCodes.NOT_FOUND)
    })

    it('Tenta atualizar registro com nome e id não aceitáveis', async () => {

        const res1 = await testServer
            .put('/cidades/a')
            .send({nome: 'As'})

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST)
        expect(res1.body).toHaveProperty('errors.body.nome' && 'errors.params.id')
    })
    */
})