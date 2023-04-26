using System;
using System.Collections.Generic;
using System.Linq;
using Video_Editing_API.Model.ViewModel;

namespace Video_Editing_API.Service
{
    public interface IUserService
    {
        List<AppUser> GetListUsers();
        AppUser GetUser(string Username);
        void UpdateUser(AppUser user);
        void AddUser(AppUser user);
        void RemoveUser(string id);

        AppUser Authenticate(LoginModel user);
        AppUser Register(RegisterModel user);
       
    }
}
