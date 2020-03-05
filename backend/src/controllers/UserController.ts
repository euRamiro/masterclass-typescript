import {Request, Response} from 'express';
import EmailService from '../services/EmailService';

const users = [
  {nome: 'euRamiro', email: 'euramiro@gmail.com'}
];

export default {
  async index(req: Request, res: Response){
    return res.json(users);
  },
  //informando o tipo de req e res porque a inferência de tipo não funciona
  //automáticamente em alguns casos.
  async create(req: Request, res: Response){
    const emailService = new EmailService();
    
    emailService.enviarEmail({
      para: {
        nome: 'Ramiro',
        email: 'euramiro@gmail.com'
      },
      mensagem: {
        assunto: 'Bem-vindo!',
        conteudo: 'seja bem-vindo! obridado por se condastrar.'
      }
    });
    return res.json({ ok: true });
  }
}