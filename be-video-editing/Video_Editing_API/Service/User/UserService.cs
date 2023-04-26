using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using Video_Editing_API.Model.ViewModel;
using Video_Editing_API.Service.DbConnection;

namespace Video_Editing_API.Service
{
    public class UserService: IUserService
    {
        private readonly IMongoCollection<AppUser> _user;
      

        public UserService(IDbClient dbClient)
        {
            _user = dbClient.GetUserCollection();
        }

        public List<AppUser> GetListUsers()
        {
            return _user.Find(user => true).ToList();
        }
        public AppUser GetUser(string username)
        {
            return _user.Find<AppUser>(u => u.Username == username).FirstOrDefault(); 
        }

        public void UpdateUser(AppUser user)
        {
            _user.ReplaceOne(u => u.ID == user.ID, user);
        }

        public void RemoveUser(string id)
        {
            _user.DeleteOne(u => u.ID == id);
        }

        public void AddUser(AppUser user)
        {
            _user.InsertOne(user);
        }


        public AppUser Authenticate(LoginModel userLogin)
        {
            var user = _user.Find(u => u.Username == userLogin.Username && u.Password == userLogin.Password)
                .FirstOrDefault();
            if (user == null)
            {
                return null;
            }
            else
            {
                return user;
            } 
        }

        public void Register(RegisterModel userRegister)
        {
            AppUser user = new AppUser();
            user.Username = userRegister.Username;
            user.Password = userRegister.Password;
            user.Fullname = userRegister.Fullname;
            user.Email = userRegister.Email;
            var existingUser = GetUser(user.Username);

            if (existingUser != null)
            {
                throw new ApplicationException("Username already exists.");
            }
            else
            {
                AddUser(user);
            }
        }
    }
}
