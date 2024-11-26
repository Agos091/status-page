const request = require('supertest');
const app = require('../index'); // Certifique-se de importar o app exportado
const { sequelize } = require('../models/Service');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Testes para rotas de serviços', () => {
  it('Deve criar um novo serviço', async () => {
    const response = await request(app).post('/api/services').send({
      name: 'Test Service',
      description: 'Service for testing',
      status: 'Online',
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Test Service');
  });

  it('Deve listar todos os serviços', async () => {
    const response = await request(app).get('/api/services');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThanOrEqual(1);
  });

  it('Deve retornar erro ao criar serviço sem campos obrigatórios', async () => {
    const response = await request(app).post('/api/services').send({
      description: 'Missing fields',
    });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Name and status are required');
  });
});
