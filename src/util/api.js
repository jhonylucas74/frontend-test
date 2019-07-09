import axios from 'axios';

function tranformRankingReponse(res) {
  const data = res.data.map(elm => {
    const positive = Number(elm.positive);

    if (!positive) {
      elm.approval = null;
      return elm;
    }

    const total =  positive + Number(elm.negative);
    elm.approval = ((positive * 100) / total).toFixed(0);
    return elm;
  });

  return data.sort((a, b) => b.approval - a.approval);
}

export default class Api {
  static async getRanking() {
    const res = await axios.get('/fazenda.json');
    return tranformRankingReponse(res.data);
  }
}