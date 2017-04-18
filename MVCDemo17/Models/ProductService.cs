using MVCDemo17.Controllers.WebAPI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVCDemo17.Models
{
    public class ProductService : IProductRepository
    {
        private SimpleProductsController _productService;

        public ProductService(SimpleProductsController productService)
        {
            _productService = productService;
        }

        public void Add(Product product)
        {
            _productService.Post(product);
        }

        public Product GetProduct(int id)
        {
            return _productService.Get(id);
        }

        public List<Product> GetProductList()
        {
            return _productService.Get().ToList();
        }

        public Product UpdateProduct(Product product)
        {
            throw new NotImplementedException();
        }
    }
}
