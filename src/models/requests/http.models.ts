import { AxiosRequestConfig } from 'axios'

export interface IRequestOptions
  extends Omit<AxiosRequestConfig, 'responseType' | 'baseUrl' | 'url'> {
  route: string
  token?: string | null | undefined
}

export interface IRequestService {
  text(options: IRequestOptions): Promise<string>
  json<TResponse>(options: IRequestOptions): Promise<TResponse>
}
