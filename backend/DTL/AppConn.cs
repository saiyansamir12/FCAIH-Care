using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.DTL
{
    public class AppConn : IdentityDbContext<AppUser>
    {
        public AppConn(DbContextOptions<AppConn> options) : base(options)
        {
            Orders = Set<Order>();
            Products = Set<Product>();
            Users = Set<User>();
            OrderItems = Set<OrderItem>();
            ProductCategorys = Set<ProductCategory>();
        }

        public new DbSet<User> Users { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<ProductCategory> ProductCategorys { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("Users");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("Products");
            });

            modelBuilder.Entity<ProductCategory>(entity =>
            {
                entity.ToTable("ProductCategorys");
            });

            modelBuilder.Entity<OrderItem>(entity =>
            {
                entity.ToTable("OrderItems");
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.ToTable("Orders");
            });
        }
    }
}