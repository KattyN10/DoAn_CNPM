using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Video_Editing_API.ViewModel.User;

namespace Video_Editing_API
{
    public interface IUserServices
    {
        /*List<User> GetUsers();
        User AddUser(User user);
        User GetUser(string id);
        void DeleteUser(string id);
        User UpdateUser(User user);*/

        Task<string> Authenticate(LoginRequest request);
        Task<bool> Register(RegisterRequest request);
    }
}
