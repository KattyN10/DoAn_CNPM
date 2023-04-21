using System;


namespace Video_Editing_API.ViewModel.User
{
    public class LoginRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public bool Remember { get; set; }
    }
}
