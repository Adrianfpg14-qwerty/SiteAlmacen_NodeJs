import { ClienteRoutes } from './cliente';
import { VentaRoutes  } from './venta';
import { tipoProductoRoutes } from './tipoproducto';
import { ProductoRoutes } from './producto';
 


export class Routes {
    public ClienteRoutes: ClienteRoutes = new ClienteRoutes();
    public VentaRoutes: VentaRoutes = new VentaRoutes();
    public tipoProductoRoutes: tipoProductoRoutes = new tipoProductoRoutes();
    public ProductoRoutes: ProductoRoutes = new ProductoRoutes();
}
