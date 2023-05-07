using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace video_editing_api.Service.Video
{
    public interface IVideoService
    {
        List<Model.Collection.Video> GetListVideo();
        void AddVideo(Model.Collection.Video video);
        //void UpdateCategory(Model.Collection.Video video);
        Model.Collection.Video GetById(string id);
        void DeleteVideo(string id);
    }
}
