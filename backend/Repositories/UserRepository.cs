using backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Security.Cryptography;
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
        // Generate a new salt
        byte[] salt = new byte[128 / 8];
        using (var rng = RandomNumberGenerator.Create())
        {
            rng.GetBytes(salt);
        }
        user.Salt = Convert.ToBase64String(salt);

        // Hash the password
        user.Password = user.HashPassword(user.Password, user.Salt);

        _context.Users.Add(user);
        _context.SaveChanges();
        return true;
        }
        catch (Exception)
        {
            return false;
            }
            }
            public bool Update(User user)
            {
                try
                {
        // Hash the new password
        user.Password = user.HashPassword(user.Password, user.Salt);

        _context.Entry(user).State = EntityState.Modified;
        _context.SaveChanges();
        return true;
        }
        catch (Exception)
        {
            return false;
            }
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
