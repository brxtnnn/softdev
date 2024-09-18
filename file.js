const form = document.getElementById("upload-form");
const fileInput = document.getElementById("file-input");
const uploadedFiles = document.getElementById("uploaded-files");
const loadingIndicator = document.getElementById("loading");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const file = fileInput.files[0];

  loadingIndicator.style.display = "block"; // Show loading indicator

  // Simulate an upload delay
  setTimeout(() => {
    const fileItem = document.createElement("div");
    fileItem.classList.add("file-item");

    const fileName = document.createElement("p");
    fileName.textContent = file.name;

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.innerHTML = "&times;";
    removeBtn.onclick = () => {
      uploadedFiles.removeChild(fileItem);
      URL.revokeObjectURL(fileURL); // Release the object URL
    };

    // Determine the file type and create appropriate preview
    let fileURL = URL.createObjectURL(file);
    if (file.type.startsWith("image/")) {
      const filePreview = document.createElement("img");
      filePreview.src = fileURL;
      filePreview.alt = file.name;

      // Add click event to open the image in a new tab
      filePreview.onclick = () => {
        window.open(fileURL, "_blank"); // Open the image in a new tab
      };

      fileItem.appendChild(filePreview);
    } else if (file.type === "application/pdf") {
      const pdfIcon = document.createElement("img");
      pdfIcon.src =
        "https://upload.wikimedia.org/wikipedia/commons/4/4c/Pdf_file_icon.svg"; // PDF icon
      pdfIcon.alt = "PDF File";
      pdfIcon.style.width = "100%"; // Adjust icon size
      pdfIcon.style.height = "auto";
      pdfIcon.onclick = () => {
        window.open(fileURL, "_blank"); // Open PDF in a new tab
      };

      fileItem.appendChild(pdfIcon);
    } else {
      const fileIcon = document.createElement("img");
      fileIcon.src =
        "https://upload.wikimedia.org/wikipedia/commons/4/42/Document-file.svg"; // Generic file icon
      fileIcon.alt = "File";
      fileIcon.style.width = "100%"; // Adjust icon size
      fileIcon.style.height = "auto";
      fileIcon.onclick = () => {
        window.open(fileURL, "_blank"); // Open file in a new tab
      };

      fileItem.appendChild(fileIcon);
    }

    fileItem.appendChild(fileName);
    fileItem.appendChild(removeBtn);
    uploadedFiles.appendChild(fileItem);

    loadingIndicator.style.display = "none"; // Hide loading indicator
    fileInput.value = ""; // Clear file input
  }, 1000); // Simulate a 1-second upload delay
});