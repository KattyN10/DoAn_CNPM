using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Video_Editing_API.Service.Tag
{
    public interface ITagService
    {
        List<Model.Collection.Tag> GetListTag();
        //Model.Collection.Tag GetTag(string Name);
        void AddTag(Model.Collection.Tag tag);
        void UpdateTag(Model.Collection.Tag tag);
        void Removetag(string id);
    }
}
