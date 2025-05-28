import { productos } from "./data";

function Producto({ product , size }){
  <div>
    <div>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
    </div>
    <div>
          <img
          src={product.images }
          alt={product.title}
          width={size}
          height={size}
         
          />
    </div>
  </div>
}

export default function Profile(){
  return(
    productos.map(producto => (
      <Producto
      key={producto.id}
      product={{
        title: producto.title,
        description: producto.description,
        images: producto.images
      }}
      size={50}
      
      />
    ))
  )
}