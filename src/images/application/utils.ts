
export type DicomPixelData = number[][]

// Took an aribitrary value of 2000 to normalize the grayscale since I found 
// images are often between -1000 for air and 1000 for bone, but air was 0 in the samples
// and some values exceeded 1000
const convertDicomValueTo255 = (value: number)=>{
    return value*255 / 2000
}

export const getClampedArrayFromDicomData = (pixelData: DicomPixelData) => {
    const imageHeight = pixelData.length;
    const imageWidth = pixelData[0].length
    const rawPixelData = pixelData.flat(1)
    const clampedArray =  new Uint8ClampedArray(imageHeight*imageWidth*4)

    rawPixelData?.forEach((rawPixel: number, i: number)=>{
        const pixel255 = convertDicomValueTo255(rawPixel)
        clampedArray[i*4] = pixel255 //R
        clampedArray[i*4+1] = pixel255 //G
        clampedArray[i*4+2] = pixel255 //B
        clampedArray[i*4+3] = 255 //Opacity
    })

    return {
        imageHeight,
        imageWidth,
        pixelArray: clampedArray,
    }
}