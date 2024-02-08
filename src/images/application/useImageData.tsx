import { useState, useCallback, useRef } from "react";
import { ImagesApi } from "../api";
import { getClampedArrayFromDicomData } from "./utils";

export const useImageData = () => {
  const [patientName, setPatientName] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement>();

  const getPatientName = useCallback(async () => {
    const name = await ImagesApi.getImagePatientName();
    setPatientName(name);
  }, []);

  const getImage = useCallback(async () => {
    if (!canvasRef.current) return;

    const pixelData = await ImagesApi.getImagePixelArray();
    if (!pixelData) return;

    const { imageHeight, imageWidth, pixelArray } =
      getClampedArrayFromDicomData(pixelData);

    canvasRef.current.width = imageWidth;
    canvasRef.current.height = imageHeight;

    const imageDataInstance = new ImageData(
      pixelArray,
      imageHeight,
      imageWidth
    );
    const ctx = canvasRef.current.getContext("2d");
    ctx?.putImageData(imageDataInstance, 0, 0);
  }, []);

  return {
    patientName,
    setPatientName,
    getPatientName,
    getImage,
    canvasRef,
  };
};
