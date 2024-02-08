import { expect, describe, it } from "vitest";
import { DicomPixelData, getClampedArrayFromDicomData } from "./utils";

describe("getClampedArrayFromDicomData", () => {
    it("returns a flattened array and generates RGBY values for each pixel in a 8-bit scale", () => {
        const mocked_pixel_array: DicomPixelData = [[2000, 2000],  [0, 0]]
        const expected_final_array = new Uint8ClampedArray([255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255])
        
        const {pixelArray, imageHeight, imageWidth} = getClampedArrayFromDicomData(mocked_pixel_array)

        expect(pixelArray).toEqual(expected_final_array)
        expect(imageHeight).toEqual(2)
        expect(imageWidth).toEqual(2)
    });

    it("should not break when an empty array is introduced", () => {
        const mocked_pixel_array: DicomPixelData = []
        const expected_final_array = new Uint8ClampedArray([])
        
        const {pixelArray, imageHeight, imageWidth} = getClampedArrayFromDicomData(mocked_pixel_array)

        expect(pixelArray).toEqual(expected_final_array)
        expect(imageHeight).toEqual(0)
        expect(imageWidth).toEqual(0)
    });
  });
  