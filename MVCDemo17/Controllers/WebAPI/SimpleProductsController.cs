using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MVCDemo17.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MVCDemo17.Controllers.WebAPI
{
    [Route("api/[controller]")]
    public class SimpleProductsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public SimpleProductsController(ApplicationDbContext context)
        {
            _context = context;
        }
        // GET: api/values
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return _context.Products.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Product Get(int id)
        {
            return _context.Products.SingleOrDefault(p => p.ProductID == id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Product product)
        {
            _context.Add(product);
            _context.SaveChanges();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Product product)
        {
            _context.Products.Update(product);
            _context.SaveChanges();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var product = _context.Products.Single(p => p.ProductID == id);
            _context.Products.Remove(product);
            _context.SaveChanges();
        }
    }
}
