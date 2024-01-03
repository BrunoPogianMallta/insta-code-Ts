import { Request, Response } from 'express';
import { createCustomer } from '../createCustomer';

export const create = async (req: Request, res: Response): Promise<void> => {
  const customerData = req.body;

  try {
    const createdCustomer = await createCustomer(
      customerData.name,
      customerData.lastName,
      customerData.city,
      customerData.address,
      customerData.complement,
      customerData.code
    );

    // Retornar o cliente criado em formato JSON
    res.status(201).json({
      message: 'Cliente criado com sucesso!',
      customer: createdCustomer,
    });
  } catch (error) {
    console.error('Erro ao criar o cliente:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};
