import React from 'react'

const Modal = ({modal, setModal}) => {
    
    React.useEffect(()=>{
        function handleClick({target}){
            if(target.classList.contains('modal-background') && !target.classList.contains('modal') ){
                setModal(!modal)
            }
        } 

        window.addEventListener('click', handleClick)
        return (()=>{
            window.removeEventListener('click', handleClick)
        })
    }, [])

  return (
    <div style={{
        margin: '.5rem',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgb(0, 0, 0, .3)',
        position: 'absolute',
        top: '0',
        left: '0',
        display: 'flex',
        alignContent: 'center'
        }} className='modal-background'>
      <div style={{
        backgroundColor: 'rgb(0, 0, 0, .4)',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '1rem',
        borderRadius: '1rem'
        }} className='modal'>
          Modal Aberto
          <button onClick={()=>setModal(!modal)}>Fechar</button>
      </div>
    </div>
  )
}

export default Modal
