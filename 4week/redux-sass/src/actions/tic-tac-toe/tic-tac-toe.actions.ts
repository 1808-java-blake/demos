import { ticTacToeTypes } from './tic-tac-toe.types';

export const makeMove = (game: string[][], playerTurn: boolean) => (dispatch: any) => {
  dispatch({
    payload: {
      game,
      playerTurn
    },
    type: ticTacToeTypes.MAKE_MOVE,
  })
}

export const endGame = (winner: number, message: string) => (dispatch: any) => {
  dispatch({
    payload: {
      message,
      winner
    },
    type: ticTacToeTypes.END_GAME
  })
}

export const resetGame = () => (dispatch: any) => {
  dispatch({
    payload: {
      game: [
        ['','',''],
        ['','',''],
        ['','',''],
      ],
      message: '',
      playerTurn: true,
      winner: 0
    },
    type: ticTacToeTypes.RESET
  })
}
