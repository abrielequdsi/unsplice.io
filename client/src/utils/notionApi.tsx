import axios from 'axios';

const loadNotionContent = (pageId: any) => {
  const url = `https://notion-api.splitbee.io/v1/page/${pageId}`;

  const apiCompletionPromise = axios.get(url);

  return apiCompletionPromise;
};

export default loadNotionContent;
