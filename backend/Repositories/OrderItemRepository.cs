using backend.Models;
using System.Data;
using System.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using backend.DTL;
using System.Collections.Generic;
using System.Linq;
namespace backend.Repositories
{
    public class OrderItemRepository : IListRepository<OrderItem>
    {
        private readonly AppConn _context;
        


        public OrderItemRepository(AppConn context)
        {
            _context = context;
        }

        public IEnumerable<OrderItem> GetAll()
        {
            return _context.OrderItems.ToList();
        }


        public List<OrderItem> GetById(int orderId)
        {
            return _context.OrderItems.Where(o => o.OrderID == orderId).ToList();
        }


        public bool Add(OrderItem orderItem)
        {
            try
            {
                _context.OrderItems.Add(orderItem);
                _context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                // Handle exception, log it, or return false
                return false;
            }
        }

        public bool Update(OrderItem orderItem)
        {
            try
            {
                _context.OrderItems.Update(orderItem);
                _context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                // Handle exception, log it, or return false
                return false;
            }
        }

        public bool Delete(int orderItemId)
        {
            try
            {
                var orderItem = _context.OrderItems.Find(orderItemId);
                if (orderItem != null)
                {
                    _context.OrderItems.Remove(orderItem);
                    _context.SaveChanges();
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {
                // Handle exception, log it, or return false
                return false;
            }
        }

        public OrderItem GetObjById(int id)
        {
            return _context.OrderItems.Find(id);
        }
    }
}

