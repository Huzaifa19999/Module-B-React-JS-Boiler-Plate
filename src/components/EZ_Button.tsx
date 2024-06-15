type btnProps = {
    className:string,
    label:string,
    click:() => void
}


function EZ_Button(props:btnProps) {

    const { className, label, click } = props

  return (
    <>
     <button className={className} onClick={click}>{label}</button> 
    </>
  )
}

export default EZ_Button
