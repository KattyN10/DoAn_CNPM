using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using video_editing_api.Model.ViewModel;
using video_editing_api.Service.DbConnection;

namespace video_editing_api.Service.Video
{
    public class VideoService: IVideoService
    {
        private readonly IMongoCollection<Model.Collection.Video> _video;

        public VideoService(IDbClient dbClient)
        {
            _video = dbClient.GetVideoCollection();
        }

        public List<Model.Collection.Video> GetListVideo(string username)
        {
            return _video.Find(v => v.Username == username).ToList();
        }

        public void AddVideo(VideoModel model)
        {
            Model.Collection.Video video = new Model.Collection.Video();
            video.Title = model.Title;
            video.Username = model.Username;
            video.Filename = model.Filename;
            video.CatName = model.CatName;
            _video.InsertOne(video);
        }

        public void DeleteVideo(string id)
        {
            _video.DeleteOne(v => v.ID == id);
        }

    }
}
