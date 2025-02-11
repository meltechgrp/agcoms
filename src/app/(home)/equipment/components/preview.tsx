"use client";

import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/web/pdf_viewer.css";

pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.min.mjs";

interface PdfPreviewProps {
  url: string;
  alt: string;
}

const PdfPreview = ({ url, alt }: PdfPreviewProps) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const renderPdf = async () => {
      const loadingTask = pdfjsLib.getDocument(url);
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1); // Get the first page

      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = canvasRef.current;
      if (canvas) {
        const context = canvas.getContext("2d");
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = {
          canvasContext: context!,
          viewport,
        };

        await page.render(renderContext).promise;
        setImageSrc(canvas.toDataURL()); // Convert canvas to data URL for preview
      }
    };

    renderPdf();
  }, [url]);

  return (
    <div className="w-full h-48 relative">
      {imageSrc ? (
        <img src={imageSrc} alt={alt} className="object-cover w-full h-full" />
      ) : (
        <canvas ref={canvasRef} className="hidden" />
      )}
    </div>
  );
};

export default PdfPreview;
