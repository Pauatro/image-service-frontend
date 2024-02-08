import { authFetchApi } from "../../auth/api";
import { ApiMethod } from "../../shared/api";
import { environmentService } from "../../shared/environmentService";
import { DicomPixelData } from "../application/utils";

interface GetImagePatientNameResponse {
  name: string;
}

interface GetImagePixelArrayResponse {
  pixel_array: DicomPixelData;
}

export class ImagesApi {
  private static baseUrl = environmentService.backendBaseUrl;
  private static imagesApiPrefix = "/images";
  private static imagesApiEndpoints = {
    patientName: `${this.baseUrl}${this.imagesApiPrefix}/patient`,
    pixelArray: `${this.baseUrl}${this.imagesApiPrefix}/pixel-array`,
  };

  static async getImagePatientName() {
    const data = await authFetchApi<GetImagePatientNameResponse>({
      url: this.imagesApiEndpoints.patientName,
      method: ApiMethod.GET,
    });
    return data?.name ?? "";
  }

  static async getImagePixelArray() {
    const data = await authFetchApi<GetImagePixelArrayResponse>({
      url: this.imagesApiEndpoints.pixelArray,
      method: ApiMethod.GET,
    });
    return data?.pixel_array;
  }
}
