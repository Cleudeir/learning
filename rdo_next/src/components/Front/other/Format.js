function Format(item) {
  function genericFormat(numero, length, mascara) {
    if (numero.length < length) {
      return numero;
    } else if (numero.length >= length) {
      const nonNumeric = mascara.filter((item) => typeof item !== "number");
      let result = "";
      let index = 0;
      for (let i = 0; i < mascara.length; i++) {
        if (nonNumeric.includes(mascara[i])) {
          result += mascara[i];
        } else {
          if (numero.length >= index + mascara[i]) {
            result += numero.slice(index, index + mascara[i]);
            index += mascara[i];
          } else {
            result += numero.slice(index);
            break;
          }
        }
      }
      console.log(result);
      return result.slice(0, length + nonNumeric.length);
    }
  }
  function toStringNumber(numero) {
    return numero
      .toString()
      .split("")
      .filter((char) => /\d/.test(char))
      .join("")
  }
  function toNumber(numero) {
    const num = Number(numero
      .toString()
      .split("")
      .filter((char) => /\d/.test(char))
      .join(""))
      console.log(num)
      return num;
  }
  

  function CNO(numero) {
    const mascara = [2, ".", 3, ".", 5, "/", 2];
    const num = toStringNumber(numero);
    return genericFormat(num, 12, mascara);
  }

  function telefone(numero) {
    const num = toStringNumber(numero);
    if (num.length <= 10) {
      const mascara = ["(", 2, ")", " ", 4, " ", 4];
      return genericFormat(num, 10, mascara);
    } else {
      const mascara = ["(", 2, ")", " ", 1, " ", 4, " ", 4];
      return genericFormat(num, 11, mascara);
    }
  }

  function CEP(numero) {
    const num = toStringNumber(numero);    
    const mascara = [2, ".", 3, "-", 3];
    return genericFormat(num, 8, mascara);
  }

  return { CNO, telefone, CEP , toNumber, toStringNumber };
}

export default Format();
