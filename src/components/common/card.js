import React from 'react';
import styles from './card.less';
import { Icon } from 'antd';


const CardHd = (props) => {
    return (
      <div className={styles.card__hd}>
        <h5>{props.title}</h5>
        <div>{props.children}</div>
      </div>
    )
}

const CardBd = (props) => {
    return (
      <div className={styles.card__bd}>
        {props.children}
      </div>
    )
}

class Card extends React.Component {
  static CardHd = CardHd;
  static CardBd = CardBd;
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className={styles.card}>
            {this.props.children}
        </div>
    )
  }
}
















Card.propTypes = {
};

export default Card;


