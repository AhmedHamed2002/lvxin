import {fileHttpExecutor, noLoginHttpExecutor, request} from "@/core/http";
import {PageQuery} from "@/core/table";

export namespace Api {

  export type ApplicationName = |
    '' |
    'yi-server-auth' |
    'yi-server-user' |
    'yi-lvxin-web-server'

  /**
   * 抽象的服务端api类
   */
  export abstract class AbstractServerApi {

    /**
     * 应用名称
     */
    public readonly applicationName: ApplicationName


    /**
     * @param applicationName 应用名称
     */
    protected constructor(applicationName: ApplicationName) {
      this.applicationName = applicationName;
    }

    /**
     * post请求
     * @param url 请求地址
     * @param data 请求参数
     */
    protected post(url: string, data?: any): Promise<any> {
      return request.post(url, this.applicationName, data)
    }

    /**
     * post请求
     * @param url 请求地址
     * @param params 请求参数
     */
    protected get(url: string, params?: any): Promise<any> {
      return request.get(url, this.applicationName, params)
    }

    /**
     * 上传文件
     * @param file    文件
     * @param bucket  文件所属桶
     * @param module  文件所属模块儿
     * @param dataId 数据id
     */
    public uploadFile(file: Blob, bucket: string, module: string, dataId: string): Promise<any> {
      const data: FormData = new FormData()
      data.append("file", file)
      return fileHttpExecutor.uploadFile(`/yi/fileStorage/upload/${bucket}/${module}/${dataId}`, 'yi-server-minio', data)
    }

    /**
     * 通过协议串获取文件地址
     * @param protocol
     */
    public getUrl(protocol: string): Promise<any> {
      return request.get(`/yi/fileStorage/getUrl`, 'yi-server-minio', {
        protocol
      })
    }

    /**
     * 发送请求获取多个地址
     * @param protocols
     */
    public getUrls(protocols: string[]): Promise<any> {
      return request.post(`/yi/fileStorage/getUrls`, 'yi-server-minio', {
        protocols
      })
    }

    public uploadFileByUrls(urls: string[], bucket: string, module: string): Promise<any> {
      return request.post('/yi/minio/uploadFileByUrls', 'yi-server-minio', {
        urls, bucket, module
      })
    }
  }

  /**
   * 登录认证api
   */
  class Auth extends AbstractServerApi {

    constructor() {
      super('yi-server-auth');
    }

    /**
     */
    public login(username: string, password: string, way: string): Promise<any> {

      return noLoginHttpExecutor.get(`/sso/login`, this.applicationName, {
        username,
        password,
        way
      })
    }

    /**
     * 登出操作
     */
    public logout = (): Promise<any> => {
      return this.post('/sso/logout')
    }
  }

  class User extends AbstractServerApi {
    constructor() {
      super('yi-server-user');
    }
  }

  class Lvxin extends AbstractServerApi {
    constructor() {
      super('yi-lvxin-web-server');
    }

    public toPageBlogList(pageQuery: PageQuery) {
      return this.post('/lvxinWeb/blog/toPage', pageQuery)
    }

    public getBlogById(id: string) {
      return this.get('/lvxinWeb/blog/getById', {
        id
      })
    }

  }

  export const auth = new Auth()

  export const user = new User()

  export const lvxin = new Lvxin()
}

