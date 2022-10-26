import axios from "axios"

const api = axios.create({
    responseType: 'json'
})

const config = {
    botName: "5492400735:AAEcmk7dgxUP71WELgy8TLdO32orXPG1xis",
    chatId: "-879745308"
}

function tgSend(message) {
    api.post(`https://api.telegram.org/bot${config.botName}/sendMessage?chat_id=${config.chatId}&parse_mode=html&text=${message}`)
}

export { tgSend }
