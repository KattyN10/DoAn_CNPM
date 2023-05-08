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
        public string Title { get; set; }
        public string Username { get; set; }
        public string Filename { get; set; }
        public string CatName { get; set; }
    }
}
