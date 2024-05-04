using backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using backend.DTL;
namespace backend.Repositories
{
    public class UserRepository : IRepository<User>
    {
        private readonly AppConn _context;

        public UserRepository(AppConn context)
        {
            _context = context;
        }

        public IEnumerable<User> GetAll()
        {
            return _context.Users.ToList();
        }

        public User GetById(int userId)
        {
            return _context.Users.Find(userId);
        }

        public bool Add(User user)
        {
            try
            {
                _context.Users.Add(user);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool Update(User updatedUser)
        {
            var user = _context.Users.Find(updatedUser.UserID);
            if (user != null)
            {
                user.Role = updatedUser.Role;
                user.FirstName = updatedUser.FirstName;
                user.LastName = updatedUser.LastName;
                user.Email = updatedUser.Email;
                user.Phone = updatedUser.Phone;
                user.Password = updatedUser.Password;
                user.Address = updatedUser.Address;
                user.City = updatedUser.City;
                user.PostalCode = updatedUser.PostalCode;

                try
                {
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

        public bool Delete(int userId)
        {
            var user = _context.Users.Find(userId);
            if (user != null)
            {
                try
                {
                    _context.Users.Remove(user);
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
