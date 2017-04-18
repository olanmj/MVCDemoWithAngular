using System.Collections.Generic;

namespace MVCDemo17.Models

{
    public interface IProductRepository
    {
        void Add(Product product);
        List<Product> GetProductList();
        Product GetProduct(int id);

        Product UpdateProduct(Product product);
    }
}