using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebUI3.DB;
using WebUI3.Model;

namespace WebUI3.Controllers
{
    [Route("api/[controller]")]
    public class BugsController : Controller
    {
        private readonly ApplicationDBContext context;

        public BugsController(ApplicationDBContext context)
        {
            this.context = context;
        }

        [HttpGet("[action]")]
        public IEnumerable<Bug> GetBugs()
        {
            context.Database.EnsureCreated();
            return Enumerable.Range(1, 5).Select(index => new Bug
            {
                BugId = index,
                Description = "Bug" + index
            });
        }
    }
}
