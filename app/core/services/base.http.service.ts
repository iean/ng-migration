export class BaseHttpService {
    /// angular http service
  protected _httpService: angular.IHttpService;

  /// host url of the backend
  hostUrl: string = ApiStringConstants.HOST;


  /**
   *
   * @param endpointName Relative URl
   * @returns Returns full url combining relative url with base url
   */
  // get the full API to call
  GetFullApiUrl(endpointName: string) {
    return this.hostUrl + endpointName;
  }

  /**
   *
   */
  constructor(httpService : angular.IHttpService) {
      this._httpService = httpService;
  }
}

//#region Endpoint Constants

export class ApiStringConstants {
  static HOST: string = 'http://localhost:3000';
  static USER_API_ENDPOINT: string = '/users';
}

//#endregion
