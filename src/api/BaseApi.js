class BaseApi {
  static getBaseUrl() {
    return process.env.API;
  }

  static getUrl(url) {
    if (url[0] === '/') url = url.substr(1);
    return `${BaseApi.getBaseUrl()}/${url}`;
  }

  static getHeaders() {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json');

    return headers;
  }

  static getCurrentQueryParams() {
    const { search } = window.location;
    return search
      .substr(1)
      .split('&')
      .reduce((parsed, current) => {
        const currentParam = current.split('=');
        if (currentParam[0].length > 0) {
          parsed[currentParam[0]] = currentParam.length > 1 ? currentParam[1] : true;
        }

        return parsed;
      }, {});
  }

  static parseToQuery(data) {
    const query = Object.keys(data)
      .reduce((query, current) => `${query}&${current}=${data[current]}`, '')
      .substr(1);

    return `?${query}`;
  }

  static async fetch(url, params = {}) {
    params.headers = BaseApi.getHeaders();
    if (params.body && typeof params.body === 'object') params.body = JSON.stringify(params.body);

    return await fetch(BaseApi.getUrl(url), params);
  }
}

export default BaseApi;
