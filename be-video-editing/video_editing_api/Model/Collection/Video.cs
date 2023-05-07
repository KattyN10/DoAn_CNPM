using MongoDB.Bson.Serialization.Attributes;
using MongoDbGenericRepository.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace video_editing_api.Model.Collection
{
    [CollectionName("Video")]
    public class Video
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string ID { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string CatID { get; set; }
        public virtual Category Category { get; set; }
        public virtual ICollection<Tag> tags { get; set; }
    }
}
