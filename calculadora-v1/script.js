document.addEventListener('input', function () {
  const n1 = document.getElementById('n1').value;
  const n2 = document.getElementById('n2').value;
  const operation = document.getElementById('op').value
  let r;
  switch (operation) {
    case "add":
      r = parseFloat(n1) + parseFloat(n2);
      document.getElementById('eq').innerHTML = `\\(${n1} + ${n2}=${r}\\)`;
      MathJax.typeset([document.getElementById('eq')]);
      break;
  case "sub":
      r = parseFloat(n1) - parseFloat(n2);
      document.getElementById('eq').innerHTML = `\\(${n1} - ${n2}=${r}\\)`;
      MathJax.typeset([document.getElementById('eq')]);
      break;
    case "mul":
      r = parseFloat(n1) * parseFloat(n2);
      document.getElementById('eq').innerHTML = `\\(${n1} \\cdot ${n2}=${r}\\)`;
      MathJax.typeset([document.getElementById('eq')]);
      break;
    case "div":
      if (n2 === "0") {
        document.getElementById('eq').innerHTML = `\\( \\frac{${n1}}{${n2}}= \ \\)`+`Uhhh, u sure?`
        MathJax.typeset([document.getElementById('eq')]);
        console.log('uhhh')
        }
      else {
        r = parseFloat(n1) / parseFloat(n2);
        document.getElementById('eq').innerHTML = `\\(\\frac{${n1}}{${n2}}=${r}\\)`
        MathJax.typeset([document.getElementById('eq')]);
      }
      break;
    case "pow":
      r = Math.pow(parseFloat(n1), parseFloat(n2));
      document.getElementById('eq').innerHTML = `\\(${n1}^{${n2}}=${r}\\)`
      MathJax.typeset([document.getElementById('eq')]);
      break;
    if (n1 === "" || n2 === "") {
      document.getElementById('eq').textContent = 'operação Invalida';
      console.log('bruhh');
    }
}})
