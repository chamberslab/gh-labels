export const createBadge = ({ style, text }: { style: string; text: string }): string => {
  const styles: Styles = {
    passing: {
      backgroundColor: "#28A745",
      color: "#FFFFFF",
      icon: "✔",
      title: "GOOD"
    },
    optional: {
      backgroundColor: "#007BFF",
      color: "#FFFFFF",
      icon: "i",
      title: "INFO"
    },
    blocking: {
      backgroundColor: "#DC3545",
      color: "#FFFFFF",
      icon: "✖",
      title: "BAD"
    },
  };

  const selectedStyle = styles[style.toLowerCase() as StyleType] || styles.passing;
  
  // Calculate dimensions
  const baseWidth = 109.375;
  const textWidth = text.length * 12.5;
  const isLongText = text.length > 10;
  const width = isLongText ? textWidth + 25 : baseWidth;
  const viewBoxWidth = isLongText ? width : 175;
  const height = isLongText ? "40" : "25";
  const textX = isLongText ? (width / 2 + 12.5) : "100";

  return `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}px" height="${height}px" viewBox="0 0 ${viewBoxWidth} 40" version="1.1">
      <defs>
        <style type="text/css">@import url(https://fonts.googleapis.com/css?family=Fira+Mono);</style>
        <style>
          text {
            font-family: Fira Mono;
          }
          #button {
            fill: ${selectedStyle.backgroundColor};
          }
          #text-container {
            fill: ${selectedStyle.color};
            height: 100%;
          }
          #icon-circle {
            fill: ${selectedStyle.color};
          }
          #icon {
            fill: ${selectedStyle.backgroundColor};
          }
        </style>
      </defs>
      <title>${selectedStyle.title}: ${text.toUpperCase()}</title>
      <desc>Created by hand, as one does.</desc>
      <g stroke="none" stroke-width="1" fill="none">
        <g>
          <g id="label">
            <rect id="button" x="0" y="0" width="100%" height="100%" rx="8"/>
            <g id="text-container" transform="translate(0, 27)" font-size="20">
              <text id="icon-circle" text-anchor="middle" x="25" y="-2">⬤</text>
              <text id="icon" text-anchor="middle" x="25">${selectedStyle.icon}</text>
              <text id="primary-text" text-anchor="middle" x="${textX}">${text.toUpperCase()}</text>
            </g>
          </g>
        </g>
      </g>
    </svg>
  `;
};