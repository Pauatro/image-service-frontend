import type { FC } from "react"
import { Button } from "../../../shared/ui/components/Button";
import { authTokenStore } from "../../../auth/application/hooks/authTokenStore";
import { useImageData } from "../../application/useImageData";
import { Text } from "../../../shared/ui/components/Text";

export const HomeScreen: FC = () => {
  const { resetAuthToken } = authTokenStore();

  const {
    canvasRef,
    getImage,
    patientName,
    getPatientName,
  } = useImageData();

  return (
    <div className="p-8 flex flex-col items-center justify-center">      
    <div className="w-1/2 max-w-4xl min-w-min flex flex-col gap-2 items-center">
      <Button className="pb-2" onClick={resetAuthToken}>Logout</Button>
      <Button onClick={getPatientName}>Get Patient Name</Button>
      <Text>{patientName}</Text>
      <Button  className="pb-2" onClick={getImage}>Get Image</Button>
      <canvas 
        ref={canvasRef as React.Ref<HTMLCanvasElement>} 
        id="canvas" 
      />
    </div>


    </div>
  );
};
