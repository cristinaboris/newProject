const DialogWindow = ({ handleClick }) => (
  <div style={ {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid black',
    position: 'absolute',
    top: '26%',
    background: 'gray',
    width: '200px',
    height: '200px',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  } }>
    <div style={ { textAlign: 'center' } }>
      <p>Are you sure?</p>
      <div style={ { paddingTop: 15 } }>
        <button onClick={ () => handleClick(true) }>Yes</button>
        <button onClick={ () => handleClick(false) }>No</button>
      </div>
    </div>
  </div>
)

export default DialogWindow
