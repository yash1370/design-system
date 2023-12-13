import React from "react";

interface UploadProps {
  label?: string;
  className?: string;
  title?: string;
}

const Upload = ({ className, label, title, ...props }: UploadProps) => {
  const showPreview = (event: any) => {
    if (event.target.files.length > 0) {
      const src = URL.createObjectURL(event.target.files[0]);
      const preview = document.getElementById("file-ip-1-preview");
      preview.src = src;
      preview.style.display = "block";
    }
  };

  return (
    <div>
      <div style={{ width: "100%", display: "none", marginBottom: "30px" }}>
        <img
          id="file-ip-1-preview"
          style={{ width: "100%" }}
          src="https://i.ibb.co/jLxFT5J/Microsoft-Teams-image.png"
        />
      </div>
      <div className={`${className} grid gap-2`}>
        <p className="text-grey-500 text-xs font-semibold">{label}</p>
        <input id="file-upload" type="file" {...props} className="hidden" />
        <label
          htmlFor="file-upload"
          onChange={showPreview}
          className="cursor-pointer border border-border-color rounded-full px-4 py-1 flex justify-center"
        >
          <span className="text-base font-semibold text-black/80">{title}</span>
        </label>
      </div>
    </div>
  );
};

export default Upload;
