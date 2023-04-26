using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Video_Editing_API.Model;
using Video_Editing_API.Model.ViewModel;
using Video_Editing_API.Service;

namespace Video_Editing_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public IActionResult GetListUsers()
        {
            return Ok(_userService.GetListUsers());
        }

        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody]LoginModel userLogin)
        {
            var user = _userService.Authenticate(userLogin);
            if (user == null)
            {
                return BadRequest(new { message = "Username or password is incorrect" });
            }

            return Ok(user);
        }  

        [HttpPost("register")]
        public IActionResult Register([FromBody]RegisterModel userRegister)
        {
            
            try
            {
                _userService.Register(userRegister);
                return Ok();
            }
            catch (ApplicationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}
