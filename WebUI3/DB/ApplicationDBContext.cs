using Microsoft.EntityFrameworkCore;
using WebUI3.Model;

namespace WebUI3.DB
{
    public class ApplicationDBContext: DbContext
    {
        public DbSet<Bug> Bugs { get; set; }

        public ApplicationDBContext()
        {

        }

        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}