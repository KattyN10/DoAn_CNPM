using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Video_Editing_API.Model.Collection;
using Video_Editing_API.ViewModel.User; 

namespace Video_Editing_API
{
    public class UserServices: IUserServices
    {
        /*private readonly IMongoCollection<User> _user;
        public UserServices(IDbClient dbClient)
        {
            _user = dbClient.GetUserCollection();
        }

        public User AddUser(User user)
        {
            _user.InsertOne(user);
            return user;
        }
        public void DeleteUser(string id) {
            _user.DeleteOne(user => user.ID == id);
        }
        public User UpdateUser(User user)
        {
            GetUser(user.ID);
            _user.ReplaceOne(u => u.ID == user.ID, user);
            return user;
        }

        public User GetUser(string id) => _user.Find(user => user.ID == id).First();
        public List<User> GetUsers() => _user.Find(user => true).ToList();*/

        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly IConfiguration _config;
        private readonly RoleManager<AppRole> _roleManager;

        public UserServices(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, RoleManager<AppRole> roleManager, 
            IConfiguration config)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _config = config;
        }

        public async Task<string> Authenticate(LoginRequest request)
        {
            var user = await _userManager.FindByNameAsync(request.Username);
            if (user == null) return null;
            var result = await _signInManager.PasswordSignInAsync(user, request.Password, request.Remember, false);
            if (!result.Succeeded)
            {
                return null;
            }
            var claims = new[]
            {
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.GivenName, user.Fullname)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Tokens:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Tokens:Issuer"],
                _config["Tokens:Issuer"],
                claims,
                expires: DateTime.Now.AddHours(3),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token) ;

        }

        public async Task<bool> Register(RegisterRequest request)
        {
            var user = new AppUser()
            {
                Username = request.Username,
                Password = request.Password,
                Fullname = request.Fullname,
                Email = request.Email,
                RoleID = 0
            };
            var result = await _userManager.CreateAsync(user, request.Password);
            if (result.Succeeded)
            {
                return true;
            }
            return false;
        }
    }
}
