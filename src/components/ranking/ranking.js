import React from 'react';
import Api from 'Util/api';
import './ranking.scss';

export default class Ranking extends React.Component {
  constructor (props) {
    super(props);
    this.state = { rankingList: [] };
  }

  componentDidMount () {
    Api.getRanking()
      .then(rankingList => this.setState({ rankingList }))
      .catch(err => console.error(err))
  }

  render() {
    const {rankingList} = this.state;

    return (
      <div className="ranking">
        <ul>
          { rankingList.map((elm, i) =>
            <RankingItem
              {...elm}
              key={elm.__id}
              position={i + 1} />
          )}
        </ul>
      </div>
    )
  }
}

/*
const RankingHeader = () => {
  return (
    <div className="ranking__header">
      <h1>Ranking</h1>
    </div>
  )
}*/

const RankingItem = (props) => {
  return (
    <li className="ranking__item">
      <div className="avatar">
        <img className="avatar__image" src={props.picture} alt={props.name} />
        <span className="avatar__badge">{props.position}</span>
      </div>

      <div className="ranking__item__info">
        <p>{props.name}</p>
        <label dangerouslySetInnerHTML={{ __html: props.description }} />
      </div>

      <Tooltip approval={props.approval} />
    </li>
  )
}

const Tooltip = (props) => {
  let positive = 0, negative = 0;

  if (props.approval !== null) {
    positive = props.approval;
    negative = 100 - props.approval;
  }

  return (
    <div className="tooltip">
      <div className="tooltip__column">
        <span>Gostam</span> {positive}%
      </div>
      <div className="tooltip__column">
        <span>Não Gostam</span> {negative}%
      </div>
    </div>
  )
}