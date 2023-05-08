using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using video_editing_api.Model.ViewModel;

namespace video_editing_api.Service.Video
{
    public interface IVideoService
    {
        List<Model.Collection.Video> GetListVideo(string username);
        void AddVideo(VideoModel model);
        void DeleteVideo(string id);
    }
}
