const b = document.getElementById('openFileButton');
const input = document.getElementById('fileInput');
const pre = document.getElementById('fileContent');
const grad = "Ñ@#W$98543210?!abc;:+=-,_";
let t = "";
let Resx = 1;
let Resy = 1;

document.getElementById('fs').textContent = "tamanho texto(em pixels) = " + document.getElementById('fontsize').value;
document.getElementById('fileContent').style.fontSize = String(document.getElementById('fontsize').value) + "px";
Resy = parseInt(document.getElementById('resy').value);
document.getElementById('ryt').textContent = "Multiplicador da resolução y = 1/" + Resy;
Resx = parseInt(document.getElementById('resx').value);
document.getElementById('rxt').textContent = "Multiplicador da resolução y = 1/" + Resx;

function UpdateI(event) {
  let file = event.target.files[0];
  if (file) {
    const imageURL = URL.createObjectURL(file);
    const img = new Image();
    img.src = imageURL;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width / Resx;
      canvas.height = img.height / Resy;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let t = "";
      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const index = (y * canvas.width + x) * 4;
          const red = imageData.data[index];
          const green = imageData.data[index + 1];
          const blue = imageData.data[index + 2];

          const luminance = (red + green + blue) / 3;
          const charIndex = Math.floor((luminance / 255) * (grad.length - 1));
          t += grad[charIndex];
        }
        t += "\n";
      }

      pre.textContent = t;
    };
  }
}
b.addEventListener('click', () => {
  input.click();
});
input.addEventListener('change', UpdateI);

document.getElementById('resx').addEventListener('input', function() {
  Resx = parseInt(document.getElementById('resx').value);
  document.getElementById('rxt').textContent = "Multiplicador da resolução x = 1/" + Resx;
  UpdateI({ target: { files: input.files } });
});
document.getElementById('resy').addEventListener('input', function() {
  Resy = parseInt(document.getElementById('resy').value);
  document.getElementById('ryt').textContent = "Multiplicador da resolução y = 1/" + Resy;
  UpdateI({ target: { files: input.files } });
});

document.getElementById('fontsize').addEventListener('input', function() {
  document.getElementById('fs').textContent = "tamanho texto(em pixels) = " + document.getElementById('fontsize').value;
  document.getElementById('fileContent').style.fontSize = String(document.getElementById('fontsize').value) + "px";
  UpdateI({ target: { files: input.files } });
});