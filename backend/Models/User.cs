﻿using System.Net;

namespace backend.Models
{

    public class User
    {
        public User()
        {
        }

        public int UserID { get; set; }
        public string Role { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Password { get; set; }

        public string Address { get; set; }
        public string City { get; set; }
        public string PostalCode { get; set; }

        public User(int userId, string firstName, string lastName, string email, string phone, string password, string address, string city, string postalCode)
        {
            UserID = userId;
            FirstName = firstName;
            LastName = lastName;
            Email = email;
            Phone = phone;
            Password = password;
            Address = address;
            City = city;
            PostalCode = postalCode;
        }
        public bool CheckPassword(string password)
        {
            return Password == password; // temporary
        }
    }
}
