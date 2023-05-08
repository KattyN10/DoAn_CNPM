using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using video_editing_api.Model.ViewModel;
using video_editing_api.Service.DbConnection;
using video_editing_api.Service.Video;

namespace video_editing_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VideoController : ControllerBase
    {
        private readonly IVideoService _videoService;

        public VideoController(IVideoService videoService)
        {
            _videoService = videoService;
        }

        [HttpPost("Upload")]
        public ActionResult Upload([FromForm] VideoModel model)
        {
            IFormFile video = Request.Form.Files["video"];
            
            model.Username = User.Identity.Name;
            model.Filename = video.FileName;
            _videoService.AddVideo(model);

            return RedirectToAction("Display");
        }

        [HttpGet("Display")]
        public IActionResult Display()
        {
            return Ok(_videoService.GetListVideo(User.Identity.Name));
        }
    }
}
