const li = Array.from(document.querySelectorAll('li'));

// Função que retorna uma outra funcão com o atributo gravado
// que recebe um elemento e retorna o valor do atributo informado
const getElementAttr = (key) => (el) => el.getAttribute(key)
const getAttrDataSlide = getElementAttr('data-slide')
const getAttrId = getElementAttr('id')

const dataSlideList = li.map((el) => getAttrDataSlide(el))
const idList = li.map((el) => getAttrId(el))

console.log(dataSlideList);
console.log(idList);