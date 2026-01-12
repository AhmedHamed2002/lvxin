import axios, {AxiosInstance, AxiosPromise, AxiosResponse, InternalAxiosRequestConfig} from "axios";
import {BASE_URL} from "@/lib/api";

//---------------------------------------------------------------------
// base type
//---------------------------------------------------------------------

/**
 * http状态
 */
enum HttpStatus {
  SUCCESS = 200,
  WARNING = 205
}

//============================ 拦截器 ==================================

//---------------------------------------------------------------------
// 请求拦截器
//---------------------------------------------------------------------

interface RequestInterceptor {
  exe: (request: InternalAxiosRequestConfig) => void
}

class CommonRequestInterceptor implements RequestInterceptor {
  exe(request: InternalAxiosRequestConfig): void {
  }
}

const commonRequestInterceptor: CommonRequestInterceptor = new CommonRequestInterceptor()

//---------------------------------------------------------------------
// 响应拦截器
//---------------------------------------------------------------------

abstract class ResponseInterceptor {
  public abstract exe: (response: AxiosResponse) => Promise<any>

  protected handleError(code: number, message: string) {
    if (code === HttpStatus.WARNING) {
      console.log(message)
    } else {
      console.log(message)
    }
    return Promise.reject(message)
  }
}

class CommonResponseInterceptor extends ResponseInterceptor {
  public exe = (response: AxiosResponse): Promise<any> => {
    const res = response.data
    const {code, message} = res
    if (code === HttpStatus.SUCCESS) {
      return res
    }
    return this.handleError(code, message)
  }
}

class FileResponseInterceptor extends ResponseInterceptor {
  public exe = (response: AxiosResponse): Promise<any> => {
    const {data, status, statusText} = response
    if (status === HttpStatus.SUCCESS) {
      return data
    }
    return this.handleError(status, statusText)
  }
}

const commonResponseInterceptor: CommonResponseInterceptor = new CommonResponseInterceptor()
const fileResponseInterceptor: FileResponseInterceptor = new FileResponseInterceptor()

//---------------------------------------------------------------------
// http executor
//---------------------------------------------------------------------

/**
 * http 执行器
 */
abstract class HttpExecutor {
  protected readonly instance: AxiosInstance
  protected readonly requestInterceptors: RequestInterceptor[]
  protected readonly responseInterceptor: ResponseInterceptor

  /**
   * @param requestInterceptors 请求拦截器
   * @param responseInterceptor 响应拦截器
   * @param instance 请求实例
   */
  protected constructor(requestInterceptors?: RequestInterceptor[],
                        responseInterceptor?: ResponseInterceptor,
                        instance?: AxiosInstance
  ) {
    this.instance = instance ? instance : axios.create({
      timeout: 60000000
    });
    this.requestInterceptors = requestInterceptors && requestInterceptors.length > 0 ? requestInterceptors : []
    this.responseInterceptor = responseInterceptor ? responseInterceptor : commonResponseInterceptor
    this.initInterceptors()
  }

  /**
   * 初始化拦截器
   */
  private initInterceptors = (): void => {
    this.instance.interceptors.request.use((request: InternalAxiosRequestConfig) => {
      this.requestInterceptors.forEach(i => i.exe(request))
      return request
    })
    this.instance.interceptors.response.use((response: AxiosResponse): Promise<any> =>
      this.responseInterceptor.exe(response)
    )
  }

  /**
   * get请求
   *
   * @param url             请求地址
   * @param applicationName 请求服务名称
   * @param params          get请求参数
   */
  public get(url: string, applicationName: any, params?: any): AxiosPromise {
    return this.instance({
      url,
      method: 'get',
      params,
      baseURL: `${BASE_URL}/api/${applicationName}`
    })
  }

  /**
   * post请求
   *
   * @param url             请求地址
   * @param applicationName 请求服务名称
   * @param data            post请求参数
   */
  public post(url: string, applicationName: any, data?: any): AxiosPromise {
    return this.instance({
      url,
      method: 'post',
      data,
      baseURL: `${BASE_URL}/api/${applicationName}`
    })
  }
}

/**
 * 通用的http请求执行器
 */
class CommonHttpExecutor extends HttpExecutor {

  constructor() {
    super([commonRequestInterceptor]);
  }
}

/**
 * 用于文件上传下载的http请求执行器
 */
class FileHttpExecutor extends HttpExecutor {

  constructor() {
    super([commonRequestInterceptor], fileResponseInterceptor);
  }


  /**
   * 上传文件
   * @param url             请求地址
   * @param applicationName 请求服务名称
   * @param data            post请求参数
   */
  public uploadFile(url: string, applicationName: any, data?: any): Promise<any> {
    return this.instance.post(url, data, {
      headers: {'content-type': 'multipart/area-panel'},
      baseURL: `${BASE_URL}/api/${applicationName}`
    })
  }

  /**
   * 下载文件
   * @param url             请求地址
   * @param applicationName 请求服务名称
   * @param data            post请求参数
   */
  public downloadFile(url: string, applicationName: any, data?: any): Promise<any> {
    return this.instance.get(url, {
      baseURL: `${BASE_URL}/api/${applicationName}`,
      responseType: 'blob',
      params: data
    })
  }


  /**
   * 下载文件
   * @param url             请求地址
   * @param applicationName 请求服务名称
   * @param data            post请求参数
   */
  public downloadFilePost(url: string, applicationName: any, data?: any): Promise<any> {
    return this.instance.post(url, data, {
      baseURL: `${BASE_URL}/api/${applicationName}`,
      responseType: 'blob',
    })
  }
}

/**
 * 用于登录的http执行器
 */
class NoLoginHttpExecutor extends HttpExecutor {
  constructor() {
    super([], commonResponseInterceptor)
  }
}

//---------------------------------------------------------------------
// jira
//---------------------------------------------------------------------


export const request: CommonHttpExecutor = new CommonHttpExecutor()
export const fileHttpExecutor: FileHttpExecutor = new FileHttpExecutor()
export const noLoginHttpExecutor: NoLoginHttpExecutor = new NoLoginHttpExecutor()

