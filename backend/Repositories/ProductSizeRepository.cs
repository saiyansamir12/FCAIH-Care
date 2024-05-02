using backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using backend.DTL;

namespace backend.Repositories
{
    public class ProductSizeRepository : IRepository<ProductSize>
    {
        private readonly AppConn _context;

        public ProductSizeRepository(AppConn context)
        {
            _context = context;
        }

        public IEnumerable<ProductSize> GetAll()
        {
            return _context.ProductSizes.ToList();
        }

        public ProductSize GetById(int productSizeId)
        {
            return _context.ProductSizes.FirstOrDefault(ps => ps.ProductSizeID == productSizeId);
        }

        public List<ProductSize> GetByProductId(int productId)
        {
            return _context.ProductSizes.Where(ps => ps.ProductID == productId).ToList();
        }

        public bool Add(ProductSize productSize)
        {
            try
            {
                _context.ProductSizes.Add(productSize);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool Update(ProductSize productSize)
        {
            try
            {
                _context.Entry(productSize).State = EntityState.Modified;
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool Delete(int productSizeID)
        {
            var productSize = _context.ProductSizes.Find(productSizeID);
            if (productSize != null)
            {
                try
                {
                    _context.ProductSizes.Remove(productSize);
                    _context.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
            return false;
        }
    }
}
