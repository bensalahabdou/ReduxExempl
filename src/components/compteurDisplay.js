import React from 'react'
import { connect } from 'react-redux'



function CompteurDisplay(props) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>Compteur: <span>{props.count}</span></h1>
      <div>
        <button style={{width: '50px', height: '40px', margin: '15px', borderRadius:'5px'}} onClick={props.onCountUp}>+</button>
        <button style={{width: '50px', height: '40px', margin: '15px', borderRadius:'5px'}} onClick={props.onCountDown}>-</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
return {
count : state.count
  } 
}

const mapDispatchToProps = dispatch => {
    return {
    onCountUp: () => dispatch({type: 'INCREMENT' }),
    onCountDown: () => dispatch({type: 'DECREMENT' })
  } 
}

const CompteurDisplayContainer = connect(mapStateToProps, mapDispatchToProps)(CompteurDisplay)
 

export default  CompteurDisplayContainer;

    
