using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.DTL
{
    public class DBConn : IdentityDbContext<AppUser>
    {
        public DBConn(DbContextOptions<DBConn> options) : base(options)
        {
        }
        public DbSet<Order> Orders { get; set; }

        public DbSet<Product> Products { get; set; }

        public DbSet<User> Users { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }

        public DbSet<UserLoginRequest> userLoginRequests { get; set; }
        public DbSet<ProductSize> ProductSizes { get; set; }


    }
}
