using Microsoft.EntityFrameworkCore;

namespace WebUI3.DB
{
    public class DBContext: DbContext
    {
        public DBContext(DbContextOptions<DBContext> options)
            : base(options)
        {

        }
    }
}