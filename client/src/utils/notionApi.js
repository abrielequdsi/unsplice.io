import axios from 'axios';

const loadNotionContent = (pageId) => {

    const url = `https://notion-api.splitbee.io/v1/page/${pageId}`

    // Not working
    // const apiCompletionPromise = fetch(url, {
    //     method: 'GET'
    // }) 

    const apiCompletionPromise = axios.get(url)

    return apiCompletionPromise
}

export default loadNotionContent;