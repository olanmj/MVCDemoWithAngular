using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MVCDemo17.Models;

namespace MVCDemo17.Controllers
{
    public class HomeController : Controller
    {
        private ApplicationDbContext _context;
        public HomeController(ApplicationDbContext context)
        {
            _context = context;
        }
        public IActionResult Index(string name, int number)
        {
            ViewData["UserName"] = name;
            ViewData["UserNum"] = number;
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";
           var item1 = _context.Products.Single(p => p.ProductID == 1);
            return View(item1);
        }


        public IActionResult Error()
        {
            return View();
        }
    }
}
