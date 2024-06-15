// type inpProps = {

//     placeholder:string,
//     className:string,
//     onChange:() => void,
//     required:boolean
//     value:string,
//     disabled:boolean,
//     label:any
//     // margin:any
// }



function EZ_Input(props:any) {

    const { placeholder, onChange, className, required, value, disabled } = props

  return (
    <>
        <input type="text" 
               className={className} 
               placeholder={placeholder} 
               onChange={onChange}
               required={required}
               value={value}
               disabled={disabled}
              //  label={label}
            //    sx={{margin:{margin}}}
                 />
    </>
  )
}

export default EZ_Input
