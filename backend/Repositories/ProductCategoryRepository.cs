using backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using backend.DTL;

namespace backend.Repositories
{
    public class ProductCategoryRepository : IListRepository<ProductCategory>
    {
        private readonly AppConn _context;

        public ProductCategoryRepository(AppConn context)
        {
            _context = context;
        }

        public IEnumerable<ProductCategory> GetAll()
        {
            return _context.ProductCategorys.ToList();
        }

        public List<ProductCategory> GetById(int id)
        {
            return _context.ProductCategorys.Where(ps => ps.ProductCategoryID == id).ToList();
        }

        public bool Add(ProductCategory productCategory)
        {
            try
            {
                _context.ProductCategorys.Add(productCategory); // Use productCategory, not ProductCategory
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool Update(ProductCategory productCategory)
        {
            try
            {
                _context.Entry(productCategory).State = EntityState.Modified;
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool Delete(int productCategoryID)
        {
            var productSize = _context.ProductCategorys.Find(productCategoryID);
            if (productSize != null)
            {
                try
                {
                    _context.ProductCategorys.Remove(productSize);
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
        public ProductCategory GetObjById(int id)
        {
            return _context.ProductCategorys.Find(id);
        }
    }
}
