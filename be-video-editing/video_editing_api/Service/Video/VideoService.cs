using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

        public List<Model.Collection.Video> GetListVideo()
        {
            return _video.Find(v => true).ToList();
        }

        public void AddVideo(Model.Collection.Video video)
        {
            _video.InsertOne(video);
        }

        public void DeleteVideo(string id)
        {
            _video.DeleteOne(v => v.ID == id);
        }

        public Model.Collection.Video GetById(string id)
        {
            return _video.Find<Model.Collection.Video>(v => v.ID == id).FirstOrDefault();
        }
    }
}
