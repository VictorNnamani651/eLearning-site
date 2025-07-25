function LoadingScreen() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light"
      style={{ fontFamily: '"Inter", sans-serif' }} 
    >
      {/* Custom spinning loader element */}
      <div
        className="loader loader-custom mb-4 rounded-circle"
        style={{ width: "60px", height: "60px" }}
      ></div>
      <p className="fs-4 text-secondary fw-medium">Loading, please wait...</p>

      {/* Embedded styles for the custom loader animation.
          These styles are critical for the spinner's appearance and animation. */}
      <style>{`
        .loader {
          border: 8px solid #f3f3f3; /* Light grey background for the non-spinning part */
          border-top: 8px solid #3498db; /* Default blue color for the spinning part (overridden by custom below) */
          border-radius: 50%; /* Makes the div a perfect circle */
          animation: spin 1s linear infinite; /* Applies the spinning animation */
        }

        .loader-custom {
          border-top: 8px solid #333; /* Darker grey for the spinning part, to match the provided image */
          border-right: 8px solid #f3f3f3; /* Light grey for the rest of the border */
          border-bottom: 8px solid #f3f3f3;
          border-left: 8px solid #f3f3f3;
        }

        /* Keyframes for the 'spin' animation */
        @keyframes spin {
          0% { transform: rotate(0deg); } /* Starts at 0 degrees rotation */
          100% { transform: rotate(360deg); } /* Ends at 360 degrees rotation, completing one full spin */
        }
      `}</style>
    </div>
  );
}

export default LoadingScreen;
