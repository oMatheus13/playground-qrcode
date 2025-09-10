document.addEventListener("DOMContentLoaded", () => {
  // Referências aos elementos do DOM
  const elements = {
    qrData: document.getElementById("qrData"),
    dotType: document.getElementById("dotType"),
    dotColor: document.getElementById("dotColor"),
    bgColor: document.getElementById("bgColor"),
    margin: document.getElementById("margin"),
    logoInput: document.getElementById("logoInput"),
    errorCorrectionLevel: document.getElementById("errorCorrectionLevel"),
    fileName: document.getElementById("fileName"),
    downloadPNG: document.getElementById("downloadPNG"),
    downloadSVG: documentgetElementById("downloadSVG"),
    canvas: document.getElementById("canvas"),
    infoBox: document.getElementById("infoBox"),
  };

  let qrCode;
  let logoURL = null;

  // Função para coletar todas as opções da interface
  function getOptions() {
    return {
      width: 300,
      height: 300,
      type: "svg",
      data: elements.qrData.value,
      image: logoURL,
      margin: parseInt(elements.margin.value, 10),
      qrOptions: {
        errorCorrectionLevel: elements.errorCorrectionLevel.value,
      },
      dotsOptions: {
        type: elements.dotType.value,
        color: elements.dotColor.value,
      },
      backgroundOptions: {
        color: elements.bgColor.value,
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 4, // Margem interna do logo
      },
    };
  }

  // Função principal para criar ou atualizar o QR Code
  function updateQRCode() {
    const options = getOptions();

    if (qrCode) {
      qrCode.update(options);
    } else {
      qrCode = new QRCodeStyling(options);
      qrCode.append(elements.canvas);
    }

    // Atualiza a informação de tamanho
    elements.infoBox.textContent = `Tamanho: ${options.width}x${options.height}px`;
  }

  // Função para lidar com o upload do logo
  function handleLogoUpload(event) {
    const file = event.target.files[0];
    if (!file) {
      logoURL = null;
      updateQRCode();
      return;
    }

    // Libera a URL do objeto anterior para evitar vazamento de memória
    if (logoURL) {
      URL.revokeObjectURL(logoURL);
    }

    logoURL = URL.createObjectURL(file);
    updateQRCode();
  }

toupload
  // Função para baixar o QR Code
  function download(extension) {
    if (!qrCode) return;
    const fileName = elements.fileName.value || "qrcode";
    qrCode.download({ name: fileName, extension });
  }

  // Adiciona os event listeners a todos os controles
  const controls = [
    elements.qrData, elements.dotType, elements.dotColor,
    elements.bgColor, elements.margin, elements.errorCorrectionLevel
  ];

  controls.forEach(control => {
    control.addEventListener("input", updateQRCode);
  });

  elements.logoInput.addEventListener("change", handleLogoUpload);
  elements.downloadPNG.addEventListener("click", () => download("png"));
  elements.downloadSVG.addEventListener("click", () => download("svg"));

  // Gera o QR Code inicial ao carregar a página
  updateQRCode();
});
