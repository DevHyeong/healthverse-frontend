// lib/api/apiClient.ts
import axios from "axios";
import { AxiosClient } from "@/lib/api/AxiosClient";

export class AxiosWithoutTokenApiClient extends AxiosClient {
  constructor() {
    super();
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      // headers: {
      //   'Content-Type': 'application/json',
      // },
    });
  }
}

export const apiWithoutTokenClient = new AxiosWithoutTokenApiClient();