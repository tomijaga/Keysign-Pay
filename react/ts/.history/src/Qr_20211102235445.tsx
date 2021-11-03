import React, { FC, ReactNode, useEffect, useState } from "react";
import QrCode from "qrcode";

interface QrProps {
  className?: string;
  margin?: number;
  text: string;
  width?: number;
}

const Qr: FC<QrProps> = ({ margin = 1, text }) => {
  const [qr, setQr] = useState<ReactNode | null>(null);

  useEffect(() => {
    const generateQR = async (): Promise<void> => {
      const url = await QrCode.toDataURL(text, {
        color: {
          dark: "#000000",
          light: "#0000",
        },
      });
      setQr(<img className="w-full" alt="QR Code" src={url} />);
    };

    generateQR();
  }, [margin, text]);

  return <>{qr}</>;
};

export default Qr;
