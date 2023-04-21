using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Video_Editing_API.ViewModel.User
{
    public class RegisterRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string ComfirmPassword { get; set; }
        public string Fullname { get; set; }
        public string Email { get; set; }
        public int RoleID { get; set; }
    }
}
