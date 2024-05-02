using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class UserLoginRequest
    {
        [Key]
        public int LoginId { get; set; } 
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
    