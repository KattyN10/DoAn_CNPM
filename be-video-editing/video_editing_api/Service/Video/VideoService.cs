using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using video_editing_api.Model.ViewModel;
using video_editing_api.Service.DbConnection;

namespace video_editing_api.Service.Video
{
    public class VideoService : IVideoService
    {
        private readonly IMongoCollection<Model.Collection.Video> _video;

        public VideoService(IDbClient dbClient)
        {
            _video = dbClient.GetVideoCollection();
        }

        public void AddVideo(VideoModel model)
        {
            Model.Collection.Video video = new Model.Collection.Video();

            video.Filename = model.Filename;
            video.FilePath = model.FilePath;
            video.CatID = model.CatID;
            video.Title = model.Title;

            _video.InsertOne(video);
        }

        public void DeleteVideo(string id)
        {
            _video.DeleteOne(v => v.ID == id);
        }

        public List<Model.Collection.Video> GetListVideo(string catID)
        {
            return _video.Find(v => v.CatID == catID).ToList();
        }

        Model.Collection.Video IVideoService.GetById(string id)
        {
            return _video.Find(v => v.ID == id).FirstOrDefault();
        }
    }
}
