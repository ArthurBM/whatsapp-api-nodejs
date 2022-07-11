import axios from 'axios'
/** lib usada para animar a chamada */
import ora from 'ora'
import csvToArray from '../utils/csvToArray';

/**
 * @description Exemplo de envio de mensagem simples
 */
const sendMessage = async (instanceAPI, phones, message) => {
  const spinner = ora('Enviando mensagem para a API').start();
  try {
    Promise.all(
      csvToArray(phones).map((phone) => {
        axios.post(instanceAPI, { phone, message })
      })
    )
    // await axios.post(instanceAPI, { phone, message })
    spinner.succeed('Mensagem enviada a fila de envios, deve chegar em breve.')
  } catch (e) {
    // console.log(e)
    spinner.fail('Problemas ao enviar mensagem.')
  }
}

export { sendMessage }