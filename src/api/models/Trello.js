import axios from 'axios';
import config from '../config/index';

export default class Trello {
  constructor({ apiKey, apiToken }) {
    this.apiUrl = 'https://api.trello.com';
    this.apiKey = config.API_KEY ?? apiKey;
    this.apiToken = config.API_TOKEN ?? apiToken;

    this.httpClient = axios;
    this.headers = {
      'Accept': 'application/json',
      'Content-type': 'application/json',
    };
  }

  async getUserInformation() {
    let response;
    try {
      response = await this.httpClient({
        method: 'get',
        baseURL: this.apiUrl,
        url: `/1/members/me?key=${this.apiKey}&token=${this.apiToken}`,
        headers: this.headers,
      });

      if (response.status !== 200) {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }

    return response.data;
  }

  async getMembershipsOfABoardById(boardId) {
    let response;
    try {
      response = await this.httpClient({
        method: 'get',
        baseURL: this.apiUrl,
        url: `/1/boards/${boardId}/memberships?key=${this.apiKey}&token=${this.apiToken}`,
        headers: this.headers,
      });

      if (response.status !== 200) {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }

    return response.data;
  }

  async getMemberById(memberId) {
    let response;
    try {
      response = await this.httpClient({
        method: 'get',
        baseURL: this.apiUrl,
        url: `/1/members/${memberId}?key=${this.apiKey}&token=${this.apiToken}`,
        headers: this.headers,
      });

      if (response.status !== 200) {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }

    return response.data;
  }

  async getABoardById(boardId) {
    let response;
    try {
      response = await this.httpClient({
        method: 'get',
        baseURL: this.apiUrl,
        url: `/1/boards/${boardId}?key=${this.apiKey}&token=${this.apiToken}`,
        headers: this.headers,
      });

      if (response.status !== 200) {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }

    return response.data;
  }

  async getListsOnABoardById(boardId) {
    let response;
    try {
      response = await this.httpClient({
        method: 'get',
        baseURL: this.apiUrl,
        url: `/1/boards/${boardId}/lists?key=${this.apiKey}&token=${this.apiToken}`,
        headers: this.headers,
      });

      if (response.status !== 200) {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }

    return response.data;
  }

  async getAListById(listId) {
    let response;
    try {
      response = await this.httpClient({
        method: 'get',
        baseURL: this.apiUrl,
        url: `/1/lists/${listId}?key=${this.apiKey}&token=${this.apiToken}`,
        headers: this.headers,
      });

      if (response.status !== 200) {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }

    return response.data;
  }

  async getCardsInAListById(listId) {
    let response;
    try {
      response = await this.httpClient({
        method: 'get',
        baseURL: this.apiUrl,
        url: `/1/lists/${listId}/cards?key=${this.apiKey}&token=${this.apiToken}`,
        headers: this.headers,
      });

      if (response.status !== 200) {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }

    return response.data;
  }

  async getACardById(cardId) {
    let response;
    try {
      response = await this.httpClient({
        method: 'get',
        baseURL: this.apiUrl,
        url: `/1/cards/${cardId}?key=${this.apiKey}&token=${this.apiToken}`,
        headers: this.headers,
      });

      if (response.status !== 200) {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }

    return response.data;
  }
};
