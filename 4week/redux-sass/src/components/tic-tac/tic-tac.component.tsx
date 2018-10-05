import * as React from 'react';
import { ITicTacToeState } from '../../reducers';
import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { endGame, makeMove, resetGame } from '../../actions/tic-tac-toe/tic-tac-toe.actions';


interface IProps extends ITicTacToeState{
  endGame: (winner: number, message: string) => (dispatch: any) => void,
  makeMove: (game: string[][], playerTurn: boolean) => (dispatch: any) => void,
  resetGame: () => (dispatch: any) => void
}

export class TicTacToeComponent extends React.Component<IProps, {}> {

  constructor(props: any) {
    super(props);
    console.log(props);
  }

  public makeMove(rowNumber: number, colNumber: number) {
    if (this.props.winner || this.props.game[rowNumber][colNumber]) {
      return;
    }
    const newGameState = this.props.game;
    newGameState[rowNumber][colNumber] = this.props.playerTurn ? 'x': 'o';
    this.props.makeMove(newGameState, !this.props.playerTurn)
    const winner = this.isGameOver();
    if (winner > 0) {
      this.props.endGame(winner, `Game over: Player ${this.props.playerTurn ? 'x' : 'o'} wins`);
    } else if (winner === -1) {
      this.props.endGame(winner, `Draw`);
    } 
  }

  public reset() {
    this.props.resetGame();
  }

  public render() {
    const {winner, message, playerTurn} = this.props;
    return (
      <>
        <h4>
          {
            winner 
              ? message
              : `Player ${playerTurn ? 'x' : 'o'}'s turn`
          }
        </h4>
        <div className="container" id="tic-tac-board">
          {
            this.props.game.map((row: any, rowNumber: any) => 
              <div key={'row-' + rowNumber} id={'row-' + rowNumber} className="row">
                {
                  row.map((col: any, colNumber: any) => 
                    <div key={`row-${rowNumber}-col-${colNumber}`} 
                        className={'col-4 tic-tac-col ' + ((col || winner)  ? 'not-allowed-cursor' : 'pointer')}
                        onClick={() => this.makeMove(rowNumber, colNumber)}>
                      {col}
                    </div>
                  )
                }
              </div>
            )
          }
        </div>
        {this.props.winner !== 0 && 
          <button className="btn btn-primary" onClick={this.reset.bind(this)}> Reset </button>
        }
      </>
    );
  }

  /**
   * This is not currently best practices, 
   * it should return 0 for not over 1 for player 1 wins, 2 for player 2 wins, and -1 for draw
   * or something along those lines
   */

  private isGameOver() {
    let winner = 0;
    // check rows kinda alright solution
    const isOver = this.props.game.some((row: any) => {
      const joined = row.join('');
      if (joined === 'xxx') {
        winner = 1;
        return true;
      }
      if (joined === 'ooo') {
        winner = 2
        return true;
      }
      return false;
    });
    
    if (isOver) {
      return winner;
    }


    if (this.props.winner) {
      return this.props.winner;
    }

    // col check
    for (let i = 0; i < 3; i++) {
      const col = this.props.game[0][i] + this.props.game[1][i] + this.props.game[2][i];
      if (col === 'ooo') {
        return 2;
      }
      if(col === 'xxx') {
        return 1;
      }
    }

    // diagonal checks
    const diag1 = this.props.game[0][0] + this.props.game[1][1] + this.props.game[2][2];
    if (diag1 === 'ooo') {
      return 2;
    } 
    if(diag1 === 'xxx') {
      return 1;
    }
    const diag2 = this.props.game[0][2] + this.props.game[1][1] + this.props.game[2][0];
    if (diag2 === 'ooo') {
      return 2;
    }
    if (diag2 === 'xxx') {
      return 1;
    }

    const draw = !this.props.game.some((row: any) => row.filter((tile: any) => tile === '').length > 0);
    if (draw) {
      return -1
    }

    return 0;
  }

}


const mapStateToProps = (state: IState) => (state.ticTacToe);

export const mapDispatchToProps = {
  endGame,
  makeMove,
  resetGame
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicTacToeComponent);
