using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MVCDemo17.Controllers
{
    [Produces("application/json")]
    [Route("api/Weather")]
    public class WeatherController : Controller
    {
            [HttpGet("[action]/{city}")]
            public IActionResult City(string city)
            {
                return Ok(new { Temp = "85", Summary = "Freakin hot!", City = city });
            }
    }
}