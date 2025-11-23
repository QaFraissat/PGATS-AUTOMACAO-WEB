import { faker } from '@faker-js/faker';

export function getRandomNumber() {
    return faker.number.hex({min: 10000, max: 65000})
    //return new Date().getTime()
}

export function getRandomEmail() {
    return `Fraissat-QA-${getRandomNumber()}@test.com`
}

//aqui exporta todas as funcoes se estiverem aqui
//export default getRandomNumber()
//aqui o comum é ter funcoes genericas mesmo