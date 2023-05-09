using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace video_editing_api.Model.ViewModel
{
    public class VideoModel
    {
        public string Filename { get; set; }
        public string FilePath { get; set; }
        public string CatID { get; set; }
        public string Title { get; set; }
    }
}
