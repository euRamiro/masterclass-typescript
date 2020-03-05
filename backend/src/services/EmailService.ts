interface IPara {
  nome: string;
  email: string;
}
interface IMensagem {
  assunto: string;
  conteudo: string;
  anexos?: []
}
//Data Transfer Object
interface IMensagemDTO {
  para: IPara;
  mensagem: IMensagem;
}
interface IEmailService {
  enviarEmail(request: IMensagemDTO): void;
}

class EmailService implements IEmailService {
  enviarEmail( {para, mensagem}: IMensagemDTO){
    console.log(`email enviado para: ${para.email}: ${mensagem.assunto}`);
  }
}

export default EmailService;