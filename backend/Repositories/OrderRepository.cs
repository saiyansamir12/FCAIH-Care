using backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using backend.DTL;

namespace backend.Repositories
{
    public class OrderRepository : IListRepository<Order>
    {
        private readonly AppConn _context;

        public OrderRepository(AppConn context)
        {
            _context = context;
        }

        public IEnumerable<Order> GetAll()
        {
            return _context.Orders.ToList();
        }

        public List<Order> GetById(int userId)
        {
            return _context.Orders.Where(o => o.UserID == userId).ToList();
        }

        public bool Add(Order order)
        {
            try
            {
                order.DateTime = DateTime.Now;
                _context.Orders.Add(order);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool Update(Order order)
        {
            try
            {
                _context.Entry(order).State = EntityState.Modified;
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool Delete(int orderId)
        {
            var order = _context.Orders.Find(orderId);
            if (order != null)
            {
                try
                {
                    _context.Orders.Remove(order);
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

        public Order GetObjById(int id)
        {
            return _context.Orders.Find(id);
        }
    }
}
