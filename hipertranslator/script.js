function traduzirTexto(texto, de, para) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${de}&tl=${para}&dt=t&q=${encodeURIComponent(texto)}`;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, false); // O "false" faz a requisição ser síncrona
    xhr.send();

    if (xhr.status === 200) {
        const resposta = JSON.parse(xhr.responseText);
        return resposta[0][0][0]; // Retorna a tradução
    } else {
        return "Erro na tradução";
    }
}
const idiomasDecodificados = [
  "Africâner", "Albanês", "Amárico", "Árabe", "Armênio", "Azerbaijano", "Basco", "Bielorrusso", "Bengali", "Bósnio", "Búlgaro", "Catalão", "Cebuano", "Chichewa", "Chinês", "Chinês Simplificado", "Chinês Tradicional",
  "Corsi", "Croata", "Tcheco", "Dinamarquês", "Holandês", "Inglês", "Esperanto", "Estoniano", "Filipino", "Finlandês", "Francês", "Frísio", "Galego", "Georgiano", "Alemão", "Grego", "Guzerate", "Crioulo Haitiano",
  "Hauçá", "Havaiano", "Hebraico", "Hebraico", "Hindi", "Hmong", "Húngaro", "Islandês", "Igbo", "Indonésio", "Irlandês", "Italiano", "Japonês", "Javanês", "Canarês", "Cazaque", "Quemer", "Coreano",
  "Curdo", "Quirguiz", "Lao", "Latim", "Letão", "Lituano", "Luxemburguês", "Macedônio", "Malgaxe", "Malaio", "Malaiala", "Maltês", "Maori", "Marata", "Mongol", "Birmanês", "Nepalês", "Norueguês",
  "Oriá", "Pachto", "Persa", "Polonês", "Português", "Punjabi", "Romeno", "Russo", "Samoano", "Gaélico Escocês", "Sérvio", "Sesoto", "Shona", "Sindi", "Sinhala", "Eslovaco", "Esloveno", "Somali",
  "Espanhol", "Sundanês", "Suaíli", "Sueco", "Tajique", "Tâmil", "Telugo", "Tailandês", "Turco", "Ucraniano", "Urdu", "Usbeque", "Vietnamita", "Galês", "Xhosa", "Ídiche", "Iorubá", "Zulu"
];
const idiomas = [
  "af", "sq", "am", "ar", "hy", "az", "eu", "be", "bn", "bs", "bg", "ca", "ceb", "ny", "zh", "zh-cn", "zh-tw",
  "co", "hr", "cs", "da", "nl", "en", "eo", "et", "tl", "fi", "fr", "fy", "gl", "ka", "de", "el", "gu", "ht",
  "ha", "haw", "iw", "he", "hi", "hmn", "hu", "is", "ig", "id", "ga", "it", "ja", "jw", "kn", "kk", "km", "ko",
  "ku", "ky", "lo", "la", "lv", "lt", "lb", "mk", "mg", "ms", "ml", "mt", "mi", "mr", "mn", "my", "ne", "no",
  "or", "ps", "fa", "pl", "pt", "pa", "ro", "ru", "sm", "gd", "sr", "st", "sn", "sd", "si", "sk", "sl", "so",
  "es", "su", "sw", "sv", "tg", "ta", "te", "th", "tr", "uk", "ur", "uz", "vi", "cy", "xh", "yi", "yo", "zu"];
let tex;
let it;
let ran1;
let ran2;
let lang;
let trad;
let inp;
document.getElementById('go').addEventListener('click', function() {
  tex = document.getElementById('input').value;
  inp = document.getElementById('input').value;
  it = document.getElementById('num').value;

  ran1 = 75;
  lang = [idiomasDecodificados[ran1]];
  trad = [];
   for (let i=0; i<it;i++){
     trad.push(tex);
     ran2 = parseInt(idiomas.length*Math.random());
     tex = traduzirTexto(tex,idiomas[ran1],idiomas[ran2]);
     ran1 = ran2;
     lang.push(idiomasDecodificados[ran1]);
  }
  trad.push(tex);
  let resultado = lang.map((lingua, index) => `${lingua}(<strong>${trad[index]}</strong>)`).join(" → ");
  tex = traduzirTexto(tex,idiomas[ran1],"pt");
  document.getElementById('translated').innerHTML = `traduzido: ${tex}`;
  document.getElementById('original').innerHTML = `original: ${inp}`;
  document.getElementById('it').innerHTML = resultado;
})
