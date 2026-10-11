
// export const Product = (props) => {
//     console.log(props);
//   return(
//            <article >
//       <p>{props.title}</p>
//       <p>{props.price}</p>
//     </article>
//   )
// }

export const Product = ({title,price}) => {
 
  return(
           <article >
      <p>{title}</p>
      <p>{price}</p>
    </article>
  )
}
