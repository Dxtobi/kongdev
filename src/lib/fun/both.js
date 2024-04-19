// 6706566682:AAE2TQCCzwYI3Bi-tTK70tQThW1Mf3DR9gg


import axios from 'axios';
//FOR U
const CJANNELID = '@kongdeveloper';
//const BOTID = '6811587125:AAGeRBqdFwmGzgVdnK3-WdwQVoCkHhe8vvI';

//FOR ME
const BOTID2 = '6706566682:AAE2TQCCzwYI3Bi-tTK70tQThW1Mf3DR9gg';

export const sendToTelegram = async (data) => {
    const text = `
    NEW EMAIL
    ________________________________

    ${data.firstName}  ${data.lastName}
    EMAIL: ${data.email}
    DETAILS:
    ${data.details}
    ________________________________
    `;
    const telegramURL = `https://api.telegram.org/bot${BOTID2}/sendMessage`;
    try {
        const sendMessage1 = await axios.post(telegramURL, {
            chat_id: CJANNELID,
            text,
        }, {
            headers: {
                "Content-Type": "application/json",
            },
        });


        return sendMessage1;
    } catch (error) {
        // Handle error appropriately
        console.error('34-- Error sending message to Telegram:', error.message);
        return false
    }
};