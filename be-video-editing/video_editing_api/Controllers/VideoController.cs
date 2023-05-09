using Microsoft.AspNetCore.Hosting;
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
        private readonly IWebHostEnvironment _webHostEnviroment;

        public VideoController(IVideoService videoService, IWebHostEnvironment webHostEnvironment)
        {
            _videoService = videoService;
            _webHostEnviroment = webHostEnvironment;
        }
        [HttpGet("GetListVideo")]
        public IActionResult GetListVideo()
        {
            return Ok(_videoService.GetListVideo());
        }
        [HttpGet("GetVideoByCat/{id}")]
        public IActionResult GetVideoByCat(string id)
        {
            return Ok(_videoService.GetVideoByCat(id));
        }
        [HttpPost("Upload")]
        public IActionResult Upload(IFormFile video, string catID, string title)
        {
            if (video != null && video.Length > 0)
            {
                string directoryPath = Path.Combine(_webHostEnviroment.ContentRootPath, "UploadedFiles");

                string filePath = Path.Combine(directoryPath, video.FileName);
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    video.CopyTo(stream);
                }

                VideoModel model = new VideoModel();
                model.Filename = video.FileName;
                model.FilePath = filePath;
                model.CatID = catID;
                model.Title = title;
                _videoService.AddVideo(model);

            }
            return Ok("Succesfully");

        }

        [HttpDelete("DeleteViddeo/{id}")]
        public IActionResult DeleteVideo(string id)
        {

            Model.Collection.Video video = new Model.Collection.Video();
            video = _videoService.GetById(id);
            FileInfo file = new FileInfo(video.FilePath);
            if (file.Exists)
            {
                file.Delete();
                _videoService.DeleteVideo(id);

            }
            return Ok("Delete Successfully");
        }

        [HttpPost("Download/{id}")]
        public FileResult Download(string id)
        {

            Model.Collection.Video video = new Model.Collection.Video();
            video = _videoService.GetById(id);

            byte[] bytes = System.IO.File.ReadAllBytes(video.FilePath);
            return File(bytes, "application/octnet-stream", video.Filename);
        }
    }
}
