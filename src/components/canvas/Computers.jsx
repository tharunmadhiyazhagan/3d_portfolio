import React, { useState, useEffect } from "react";

const ComputersCanvas = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <img
        src="./desktop_pc/computer-fallback.png" // Make sure this image exists in your public folder
        alt="Computer Setup"
        className="max-w-full max-h-[70vh] object-contain"
        style={{
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
};

export default ComputersCanvas;
