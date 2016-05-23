import React from 'react'

import {connect} from 'react-redux'

class Cell extends React.Component {

  clickHandler = () => {
    dispatch(clickAction(this.props.x,this.props.y))
  }

  render() {
    const {clickHandler, player} = this.props;
    const isOccupied = player !== null;

    return (
      <div className="cell" onClick={clickHandler}>
        {isOccupied ? player : ''}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const {x,y} = ownProps;
  return {
    player : state.cell[`${x}-${y}`],
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {x,y} = ownProps;
  return {
    clickHandler : () => dispatch({type : "PLAY", x, y})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cell)
