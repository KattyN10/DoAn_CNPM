using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using video_editing_api.Service.DbConnection;

namespace video_editing_api.Service.Tag
{
    public class TagService : ITagService
    {
        private readonly IMongoCollection<Model.Collection.Tag> _tag;

        public TagService(IDbClient dbClient)
        {
            _tag = dbClient.GetTagCollection();
        }

        public List<Model.Collection.Tag> GetListTag()
        {
            return _tag.Find(tag => true).ToList();
        }

        public void AddTag(Model.Collection.Tag tag)
        {
            _tag.InsertOne(tag);
        }

        public void Removetag(string id)
        {
            _tag.DeleteOne(t => t.ID == id);
        }

        public void UpdateTag(Model.Collection.Tag tag)
        {
            _tag.ReplaceOne(t => t.ID == tag.ID, tag);
        }
      
    }
}
