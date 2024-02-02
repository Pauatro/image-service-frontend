import { ApiMethod, fetchApi } from "../../shared/api";
import { environmentService } from "../../shared/environmentService";

interface LoginEndpointResponse {
  access_token: string,
  expiration_time: number
}

interface LoginEndpointRequestBody {
  username: string,
  password: string
}

export class AuthApi {
  private static baseUrl = environmentService.backendBaseUrl;
  private static authApiPrefix = "";
  private static authApiEndpoints = {
    login: `${this.baseUrl}${this.authApiPrefix}/login`,
  };

  static async login(username: string, password: string) {
    const tokenData = await fetchApi<LoginEndpointResponse>({
      url: this.authApiEndpoints.login,
      method: ApiMethod.POST,
      data: {
        username,
        password
      } as LoginEndpointRequestBody,
    });
    return tokenData;
  }
}
