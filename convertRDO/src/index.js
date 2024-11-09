const json2xls = require('json2xls');
const fs = require('fs');
const readFiles = require('./read');
const group = require('./group');


function Equipamentos(file, name) {
  const result = []
  let count = 0
  for (const key in file) {
    if (Object.hasOwnProperty.call(file, key)) {
      const element = file[key];

      if (key.includes(".")) {
        count++
        console.log(count)
        const filter = []
        // SOMENTE INFORMÇÂO ÚTIL
        for (let k = 0; k < element.length; k++) {
          const item = element[k];
          if (item) {
            filter.push(item['OBRA: CGH CHALÉ'])
          } else {
            filter.push('')
          }
        }

        let data = ''
        if (element[4] && element[4]["Column18"]) {
          data = element[4]["Column18"]
        }
        const aba = key
        const arquivo = name
        // EQUIPAMENTOS
        const indexStart = filter.indexOf("HORÍMETRO DOS EQUIPAMENTOS") + 2
        const ArrayindexMiddle = [
          filter.indexOf("Descrição do Serviço:")
          , filter.indexOf("CANTEIRO DE OBRAS")
          , filter.indexOf("ACESSOS")
        ]
        const indexMiddle = Math.min.apply(Math, ArrayindexMiddle.filter(x => x != -1 || undefined))
        const arrayEquipamentos = element
          .slice(indexStart, indexMiddle).filter(x => x != null)
          .map(x => ({
            data,
            matricula: '',
            nome: x['OBRA: CGH CHALÉ'],
            funcao: '',
            descricao: x['Column7'],
            empresa: '',
            apropriacao: x['Column15'],
            frente: '',
            hInicio: Number(x['Column17']) || 0,
            hfim: Number(x['Column18']) || 0,
            aba,
            arquivo,
            Equipamentos: 'Equipamentos'
          }))
        // FUNCIONARIOS
        let apropriacao = ''
        let frente = ''
        const arrayFuncionarios = element
          .slice(indexStart)
          .map(x => {
            if (
              x &&
              x["OBRA: CGH CHALÉ"] && x["OBRA: CGH CHALÉ"] === 'Descrição do Serviço:' &&
              x["Column17"] && x["Column17"] === 'Apropriação:' &&
              x["Column18"] && typeof x["Column18"] === 'string'
            ) {
              apropriacao = x["Column18"]
            }
            if (
              x &&
              x["OBRA: CGH CHALÉ"] &&
              Object.keys(x).length === 1
            ) {
              frente = x["OBRA: CGH CHALÉ"]
            }
            if (
              x &&
              x["OBRA: CGH CHALÉ"] && typeof x["OBRA: CGH CHALÉ"] === 'number' &&
              x["Column3"] && typeof x["Column3"] === 'string'
            ) {
              function hora(props) {
                if (typeof props === 'string') {
                  const [a, b] = props.split(':')
                  const numb = Number(a) + Number(b) / 60 || 0
                  return numb
                } else {
                  return Number(props) || 0
                }
              }
              return {
                data,
                matricula: x['OBRA: CGH CHALÉ'],
                nome: x['Column3'],
                funcao: x['Column7'],
                empresa: x['Column12'],
                apropriacao,
                frente,
                hInicio: hora(x['Column17']),
                hfim: hora(x['Column18']),
                aba,
                arquivo,
                Equipamentos: 'Funcionarios'
              }
            } else { return null }
          })
          .filter(x => x !== null)
        result.push(...arrayEquipamentos, ...arrayFuncionarios)
      }
    }
  }
  return result
}


const get = async function () {
  const result = []
  readFiles('./src/files', async (filepath, name, done) => {
    const file = await require(filepath)
    result.push(...Equipamentos(file, name))
    if (done) {
      const filter = result.filter((x) => x != null)
      const filterGroup = group(filter)
      //     console.log(filterGroup)
      console.log(filter.length + "  filter linhas convertidas")
      console.log(filterGroup.length + "  filter Group linhas convertidas")
      const xls = json2xls(filterGroup);
      fs.writeFileSync("result.xlsx", xls, 'binary');
    }
  })
}
get()



/*
echo "# convertRDO" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Cleudeir/convertRDO.git
git push -u origin main */