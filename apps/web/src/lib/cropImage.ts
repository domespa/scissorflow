import type { Area } from "react-easy-crop";

export const getCroppedImg = (
  imageSrc: string,
  pixelCrop: Area,
): Promise<File> => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Canvas non supportato"));
        return;
      }

      canvas.width = pixelCrop.width;
      canvas.height = pixelCrop.height;

      ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height,
      );

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error("Blob non generato"));
            return;
          }
          resolve(new File([blob], "cover.jpg", { type: "image/jpeg" }));
        },
        "image/jpeg",
        0.9,
      );
    });
    image.addEventListener("error", reject);
    image.src = imageSrc;
  });
};
