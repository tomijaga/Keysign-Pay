import React, { FC, ReactNode, useEffect, useState } from "react";
import QrCode from "qrcode";

interface QrProps {
  className?: string;
  text: string;
}

const Qr: FC<QrProps> = ({ text }) => {
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
  }, [text]);

  return <>{qr}</>;
};

export default Qr;
